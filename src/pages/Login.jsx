import "../pagesStyles/Login.css";
import loginPageImg from "../assets/icons/Без названия 1.png";

function Login() {
  return (
    <div className="wrapper">
      <div className="form-box login">
      <h3 className="lulu">LULU LOOK</h3>
      </div>
      {/* <form action="#"> */}
                    <div className='input-box'>
                    <span className='icon'>
                        <input type="ID" required />
                        <label>ID</label>
                    </span>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                        <input type="password" required />
                        <label>Password</label>
                        </span>
                        
                    <div className='remember-forgot'>
                        <p>Remember me?</p>
                        {/* <a href="#">Forgot Password?</a> */}
                    </div>

                    <div className="forgot">
                        <h6>Forgot Password?</h6>
                    </div>

                    <button type='sumbit' className='btn'>Log in</button>

                    <div className='login-register'>
                        <a href="#" className='register-link'></a>
                    </div>
                    <button type='sumbit' className='button'>More</button>
                    <div className='information'>
                        <a href="#" className='information'></a>
                    </div>
                    <div className='img'>
                    <img src={loginPageImg} alt="" srcset="" />
                    </div>
                    {/* <div className='loginPageImg'> 
                        <img src={loginPageImg} alt="" srcset="" />
                    </div>  */}
                    </div>
                    <div className='warning'>
                    <div className='warning'>
                        <h5>WARNING!</h5>
                    </div>
                    <div className='login-warning'>
                        <h6>In order to preserve and conserve cultural and natural <br />
                        heritage for the benefit of future generations UNESCO  <br />
                        has given directives.</h6>
                    </div>
                    </div>
                    
                {/* </form> */}


    </div>
  );
}

export default Login;


