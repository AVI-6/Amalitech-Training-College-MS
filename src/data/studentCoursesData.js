export const studentCourses = [
  {
    id: 'web-development',
    title: 'Web Development',
    code: 'Web Dev-301',
    active: 'Grade B',
    students: '28/30',
    schedule: 'Mon, Tue, Fri - 10:00 AM',
    room: 'Lab A',
    progress: 65,
    description:
      'Introduction to modern web development covering HTML, CSS, JavaScript, and React fundamentals. This course provides hands-on experience in building responsive web applications.',
    outcomes: [
      'Build responsive web applications using HTML, CSS, and JavaScript',
      'Understand modern web development frameworks like React',
      'Implement best practices for web accessibility and performance',
      'Collaborate on web projects using Git and GitHub',
    ],
    assignments: [
      { id: 'portfolio', title: 'Build a Portfolio Website', dueDate: 'Due: 2026-04-12', status: 'In Progress', tone: 'amber' },
      { id: 'react-quiz', title: 'React Components Quiz', dueDate: 'Due: 2026-04-15', status: 'In Progress', tone: 'amber' },
      { id: 'proposal', title: 'Final Project Proposal', dueDate: 'Due: 2026-04-20', status: 'Not Started', tone: 'gray' },
    ],
    grades: [
      { id: 'html-css', assignment: 'HTML/CSS Project', score: '92/100', date: '2026-03-28', tone: 'green' },
      { id: 'javascript', assignment: 'JavaScript Fundamentals Quiz', score: '85/100', date: '2026-03-22', tone: 'green' },
      { id: 'responsive', assignment: 'Responsive Design Assignment', score: '88/100', date: '2026-03-15', tone: 'green' },
    ],
    instructor: {
      name: 'Dr. Michael Chen',
      role: 'Instructor',
      email: 'michael.chen@amalitech.edu',
      officeHours: 'Mon & Wed, 2:00 PM - 4:00 PM',
    },
    classSchedule: [
      { id: 'monday', day: 'Monday', time: '10:00 AM - 12:00 PM', venue: 'Lab A' },
      { id: 'wednesday', day: 'Wednesday', time: '2:00 PM - 4:00 PM', venue: 'Lab A' },
      { id: 'friday', day: 'Friday', time: '10:00 AM - 12:00 PM', venue: 'Lab A' },
    ],
    progressOverview: {
      courseCompletion: 65,
      assignmentsCompleted: '8/12',
      assignmentsProgress: 67,
    },
  },
  {
    id: 'advanced-javascript',
    title: 'Advanced Javascript',
    code: 'JS201',
    active: 'Grade A',
    students: '22/25',
    schedule: 'Mon, Wed, Fri - 10:00 AM',
    room: 'Lab B',
    progress: 45,
    description:
      'Deep dive into asynchronous JavaScript, browser APIs, modular architecture, and testing patterns used in modern front-end applications.',
    outcomes: [
      'Work confidently with promises, async functions, and browser events',
      'Structure front-end applications using reusable modules',
      'Debug and optimize JavaScript-heavy interfaces',
      'Write maintainable code with testing and clean patterns',
    ],
    assignments: [
      { id: 'api-lab', title: 'REST API Integration Lab', dueDate: 'Due: 2026-04-17', status: 'In Progress', tone: 'amber' },
      { id: 'dom-project', title: 'Interactive DOM Project', dueDate: 'Due: 2026-04-22', status: 'Not Started', tone: 'gray' },
      { id: 'timers-quiz', title: 'Event Loop and Timers Quiz', dueDate: 'Due: 2026-04-26', status: 'Not Started', tone: 'gray' },
    ],
    grades: [
      { id: 'closures', assignment: 'Closures and Scope Quiz', score: '90/100', date: '2026-03-18', tone: 'green' },
      { id: 'async', assignment: 'Async JavaScript Lab', score: '84/100', date: '2026-03-10', tone: 'green' },
      { id: 'events', assignment: 'Browser Events Assignment', score: '87/100', date: '2026-03-05', tone: 'green' },
    ],
    instructor: {
      name: 'Prof. Sarah Williams',
      role: 'Instructor',
      email: 'sarah.williams@amalitech.edu',
      officeHours: 'Tue & Thu, 1:00 PM - 3:00 PM',
    },
    classSchedule: [
      { id: 'monday', day: 'Monday', time: '10:00 AM - 12:00 PM', venue: 'Lab B' },
      { id: 'wednesday', day: 'Wednesday', time: '10:00 AM - 12:00 PM', venue: 'Lab B' },
      { id: 'friday', day: 'Friday', time: '10:00 AM - 12:00 PM', venue: 'Lab B' },
    ],
    progressOverview: {
      courseCompletion: 45,
      assignmentsCompleted: '5/11',
      assignmentsProgress: 45,
    },
  },
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    code: 'React-101',
    active: 'Active',
    students: '38/40',
    schedule: 'Mon, Wed, Fri - 10:00 AM',
    room: 'Lab C',
    progress: 45,
    description:
      'Core introduction to React including JSX, components, props, state, hooks, and application composition for modern interfaces.',
    outcomes: [
      'Build reusable UI with functional React components',
      'Manage state and data flow across a React app',
      'Understand hooks and common rendering patterns',
      'Create maintainable front-end experiences with components',
    ],
    assignments: [
      { id: 'jsx-basics', title: 'JSX Basics Exercise', dueDate: 'Due: 2026-04-14', status: 'In Progress', tone: 'amber' },
      { id: 'state-lab', title: 'State Management Lab', dueDate: 'Due: 2026-04-19', status: 'In Progress', tone: 'amber' },
      { id: 'mini-app', title: 'Mini React App', dueDate: 'Due: 2026-04-25', status: 'Not Started', tone: 'gray' },
    ],
    grades: [
      { id: 'components', assignment: 'Component Composition Quiz', score: '86/100', date: '2026-03-25', tone: 'green' },
      { id: 'props', assignment: 'Props and State Assignment', score: '89/100', date: '2026-03-16', tone: 'green' },
      { id: 'hooks', assignment: 'Hooks Practice', score: '83/100', date: '2026-03-09', tone: 'green' },
    ],
    instructor: {
      name: 'Ms. Emily Davis',
      role: 'Instructor',
      email: 'emily.davis@amalitech.edu',
      officeHours: 'Fri, 11:00 AM - 1:00 PM',
    },
    classSchedule: [
      { id: 'monday', day: 'Monday', time: '10:00 AM - 12:00 PM', venue: 'Lab C' },
      { id: 'wednesday', day: 'Wednesday', time: '10:00 AM - 12:00 PM', venue: 'Lab C' },
      { id: 'friday', day: 'Friday', time: '10:00 AM - 12:00 PM', venue: 'Lab C' },
    ],
    progressOverview: {
      courseCompletion: 45,
      assignmentsCompleted: '4/10',
      assignmentsProgress: 40,
    },
  },
];

export function getStudentCourseById(courseId) {
  return studentCourses.find((course) => course.id === courseId);
}
