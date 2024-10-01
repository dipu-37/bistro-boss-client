import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [disable, setDisable] = useState(true);
    const captchaRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from)
            });
    };

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8 space-y-6 lg:space-y-0 w-full max-w-4xl p-6">
                    {/* Text Section */}
                    <div className="text-center lg:text-left lg:w-1/2 lg:ml-10">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                            Login now!
                        </h1>
                        <p className="py-6 text-gray-600 dark:text-gray-300">
                            Welcome back! Please enter your credentials to log in and enjoy your personalized experience.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="card w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl p-8 rounded-lg">
                        <form onSubmit={handleLogin} className="space-y-4">
                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label text-gray-700 dark:text-gray-300">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full px-4 py-2 mt-1 rounded-md text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label text-gray-700 dark:text-gray-300">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full px-4 py-2 mt-1 rounded-md text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
                                </label>
                            </div>

                            {/* Captcha */}
                            <div className="form-control">
                                <label className="label text-gray-700 dark:text-gray-300">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    ref={captchaRef}
                                    type="text"
                                    placeholder="Captcha"
                                    className="input input-bordered w-full px-4 py-2 mt-1 rounded-md text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    onClick={handleValidateCaptcha}
                                    className="btn btn-outline btn-xs mt-2">
                                    Validate
                                </button>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button
                                    disabled={disable}
                                    className={`btn w-full py-2 rounded-md transition duration-300 ease-in-out ${disable ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className="text-center mt-4">
                            <small>
                                New here?{" "}
                                <Link className="text-blue-500 hover:underline" to="/signup">
                                    Create an account
                                </Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
