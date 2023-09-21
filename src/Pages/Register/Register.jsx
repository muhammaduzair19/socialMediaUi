import './Register.css'

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginBox">
                    <div className="loginBoxWrapper">
                        <div className="loginUsername">
                            <input type="text" className='loginInput' placeholder='First Name' name="" id="" />
                            <input type="text" className='loginInput' placeholder='Last Name' name="" id="" />
                        </div>
                        <input type="email" className='loginInput' placeholder='Enter your email or phone number' name="" id="" />
                        <input type="password" className='loginInput' placeholder='Password' name="" id="" />
                        <input type="password" className='loginInput' placeholder='Password' name="" id="" />
                        <button className="loginButton">Signup</button>
                        <button className="createANewAccount">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;