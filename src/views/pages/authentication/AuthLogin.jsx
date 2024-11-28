import Google from './../../../source/images/google.png'
import Apple from './../../../source/images/apple.png'
import Facebook from './../../../source/images/facebook.png'

const AuthLogin = () => {
    return (
        <>
            <section className="login-wrapper">
                <div className="left">
                    <div className="inner">
                        <h1 className="mb-5">Logo Here</h1>
                        <h2 className="mb-4 pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        <p className="pt-4">Our app offers real-time currency conversion with competitive rates, ensuring quick and secure transactions. Accessible globally, it's designed for both travelers and businesses, making money exchange effortless.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="inner">
                        <div className="title-bar mb-5">
                            <p>Hello there,</p>
                            <h2 className='text-start'><span className='typing-demo'>Welcome Back</span></h2>
                        </div>

                        <div className="form-container">
                            <form>
                                <div className="form-group mb-3">
                                    <input type="text" name="email" placeholder="Email Address" />
                                </div>

                                <div className="form-group mb-3">
                                    <input type="password" name="email" placeholder="Password" />
                                </div>

                                <div className="forgot-password mb-5">
                                    <a href="javascript:void(0);" title="">
                                        Forgot Password?
                                    </a>
                                </div>

                                <button type="button">Login</button>
                            </form>
                        </div>

                        <div className="or-continue-with my-4">
                            <div className="line"></div>
                            <div className="content"><span>Or continue with</span></div>
                            <div className="line"></div>
                        </div>

                        <div className="social-icons mb-4">
                            <div className="row">
                                <div className="col-4 d-flex justify-content-center">
                                    <div className="social-icon">
                                        <a href="javascript:void(0);">
                                            <img src={Google} alt="Google Signin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-center">
                                    <div className="social-icon">
                                        <a href="javascript:void(0);">
                                            <img src={Apple} alt="Apple Signin" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-center">
                                    <div className="social-icon">
                                        <a href="javascript:void(0);">
                                            <img src={Facebook} alt="Facebook Signin" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="terms mb-4">
                            <p>Continue with Google, Apple or Facebook, you agree to seemyclouds <b>Terms and Conditions & Privacy Policy</b></p>
                        </div>

                        <div className="others text-center">
                            <p>Don’t have account? &nbsp;<a href="" title="Registered">Register</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AuthLogin;