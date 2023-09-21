import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginText">
                    <div className="loginLogo">
                        SocialMediaApp
                    </div>
                    <div className="loginDescription">
                        Connect with friend with all over the world through Social Media App
                    </div>
                </div>
                <div className="loginBox">
                    <div className="loginBoxWrapper">

                        <input type="email" className='loginInput' placeholder='Enter your email or phone number' name="" id="" />
                        <input type="password" className='loginInput' placeholder='Password' name="" id="" />
                        <button className="loginButton">Login</button>
                        <div className="forgotPassword">Forgot Password?</div>
                        <button className="createANewAccount">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;