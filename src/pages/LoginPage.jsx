import Form from '../components/forms/Form';
import logo from '../assets/logo.png'

function LoginPage({ title, titleDesc }) {
  return (
    <div>
      <div className="form-div">
        <div className="left-side">
          <div className="logo">
            <img src={logo} alt="logo" width={100}/>
            <h1>Amalitech Training College</h1>
          </div>
          <div className="middle-content">
            <h1>Digitizing Academic <span>Excellence</span></h1>
            <h3>Amalitech Training College provides a curated environment for learners and educators to thrive in modern digital age. Access your records, financials, and portal in one seamless workplace.</h3>
          </div>
          <div className="image">
            <div className="img-circles">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb2luJTIwcGFnaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="Login-side-image" aria-label="login side image"
                id="side-img"
              />
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb2luJTIwcGFnaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="Login-side-image" aria-label="login side image"
                id="side-img" className='overlap'
              />
              <div className="side-img-div overlap">+2k</div>
            </div>
            <div className="img-text">
              <h3>Join over 2000 scholars building their future today.</h3>
            </div>
          </div>
        </div>
        <div className="form-div">
          <Form 
            title={title}
            titleDesc={titleDesc}
            logo={logo}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
