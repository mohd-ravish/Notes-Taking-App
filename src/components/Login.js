import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {

    const [signupSection, setSignupSection] = useState(false);

    const navigate = useNavigate();

    return (
        <div>
            <div className='login-header'>
                <h1>Notes</h1>
            </div>
            {!signupSection ? (
                <div className='login-container'>
                    <div className='login-box'>
                        <div >
                            <h2>LOGIN</h2>
                            <div>
                                <label htmlFor="email"><strong>Email</strong></label>
                                <input
                                    className='input'
                                    type="email"
                                    placeholder="Enter Email"
                                    name="email" />
                            </div>
                            <div>
                                <label htmlFor="password"><strong>Password</strong></label>
                                <input
                                    className='input'
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password" />
                            </div>
                            <button onClick={() => { navigate("/") }} type="submit" className="login-button"> Log in</button>
                            <p>You are agree to our terms and policies</p>
                            <div className="login-create">
                                <Link onClick={() => { setSignupSection(true) }} className="login-create-button">Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='login-container'>
                    <div className='login-box'>
                        <div>
                            <h2>SIGN UP</h2>
                            <div>
                                <label htmlFor="name"><strong>Name</strong></label>
                                <input
                                    type="text" placeholder="Enter Name"
                                    className="input"
                                    name="name"
                                    autoComplete="off" />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="email"><strong>Email</strong></label>
                                <input
                                    type="email" placeholder="Enter Email"
                                    className="input"
                                    name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password"><strong>Password</strong></label>
                                <input
                                    type="password" placeholder="Enter Password"
                                    className="input"
                                    name="password" />
                            </div>
                            <button onClick={() => { setSignupSection(false) }} type="submit" className="login-button"> Sign Up</button>
                            <p>You are agree to our terms and policies</p>
                            <div className="login-create">
                                <Link onClick={() => { setSignupSection(false) }} className="login-create-button">Already have an Account</Link>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>

    );
}

export default Login;