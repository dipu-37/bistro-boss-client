import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const { updateUserProfile, createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || '/login';
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const LoggedUser = result.user;
        console.log(LoggedUser);
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            // create user entry in the database 
            const userInfo = {
              name: data.name,
              email: data.email
            }
            console.log(userInfo);
            // post userInfo in mongodb 
            axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                  console.log('user added in the data base');
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
              })
            console.log('user profile info update')
          })
          .catch(error => {
            console.log(error)
          })
        navigate(from);
      })
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8 w-full max-w-4xl p-6">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:ml-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              Sign up now!
            </h1>
            <p className="py-6 text-gray-600 dark:text-gray-300">
              Join us to enjoy exclusive benefits and features. Signing up is
              quick and easy!
            </p>
          </div>

          {/* Form Section */}
          <div className="card w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl p-8 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>

              {/* photo url  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Photo Url is required</span>}
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label text-gray-700 dark:text-gray-300">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full px-4 py-2 mt-1 rounded-md text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && <span className="text-red-600">Email is required</span>}
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                {/* {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>} */}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ease-in-out"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link className="text-blue-500 hover:underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
