/// <reference lib="deno.window" />
import { createClient } from 'npm:@supabase/supabase-js@2'

const TOKEN_TTL_MINUTES = 15
const MAX_REQUESTS_PER_WINDOW = 3
const RATE_LIMIT_WINDOW_MINUTES = 15

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function generateRawToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32))
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function sha256(input: string) {
  const data = new TextEncoder().encode(input)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const normalizedEmail = email.trim().toLowerCase()

    if (!isValidEmail(normalizedEmail)) {
      return new Response(JSON.stringify({ error: 'Invalid email format.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const fromEmail = Deno.env.get('SCHOOL_FROM_EMAIL')
    const frontendUrl = Deno.env.get('FRONTEND_URL')

    if (!supabaseUrl || !serviceRoleKey || !resendApiKey || !fromEmail || !frontendUrl) {
      return new Response(
        JSON.stringify({ error: 'Function environment is not fully configured.' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const windowStart = new Date(
      Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000,
    ).toISOString()

    const { count, error: rateError } = await adminClient
      .from('signup_tokens')
      .select('*', { count: 'exact', head: true })
      .eq('email', normalizedEmail)
      .gte('created_at', windowStart)

    if (rateError) {
      throw rateError
    }

    if ((count ?? 0) >= MAX_REQUESTS_PER_WINDOW) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    const rawToken = generateRawToken()
    const tokenHash = await sha256(rawToken)
    const expiresAt = new Date(Date.now() + TOKEN_TTL_MINUTES * 60 * 1000).toISOString()

    const { error: insertError } = await adminClient.from('signup_tokens').insert({
      email: normalizedEmail,
      token_hash: tokenHash,
      expires_at: expiresAt,
    })

    if (insertError) {
      throw insertError
    }

    const activationLink = `${frontendUrl}/activate?email=${encodeURIComponent(normalizedEmail)}&token=${rawToken}`

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [normalizedEmail],
        subject: 'Complete your school portal signup',
        text: [
          'Use this secure link to complete your signup.',
          activationLink,
          'This link expires in 15 minutes and can only be used once.',
        ].join('\n\n'),
      }),
    })

    if (!emailResponse.ok) {
      const emailErrorBody = await emailResponse.text()
      return new Response(
        JSON.stringify({
          error: `Token created but email failed to send. ${emailErrorBody}`,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    return new Response(
      JSON.stringify({ message: 'Signup link sent to your email address.' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unexpected error.' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})
