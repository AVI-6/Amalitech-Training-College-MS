import Form from '../components/forms/Form';
import logo from '../assets/logo.png'
import LoginSideBar from '../features/login/LoginSideBar';

function LoginPage({ title, titleDesc }) {
  return (
    <div>
      <div className="form-div">
        <LoginSideBar />
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
