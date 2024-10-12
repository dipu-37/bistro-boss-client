import { FaGoogle } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        //console.log(result.user);
        const userInfo ={
            email: result.user?.email,
            name : result.user?.displayName
        }
        axiosPublic.post('/users',userInfo)
        .then(res =>{
            console.log(res.data)
            navigate('/')
        })
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <div className="p-8 mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg">
      <div className="divider text-center text-gray-600 text-sm font-semibold uppercase">Or</div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleGoogleSignIn}
          className="btn flex items-center justify-center  py-2 px-4 bg-gray-300 md:w-full"
        >
          <FaGoogle  />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
