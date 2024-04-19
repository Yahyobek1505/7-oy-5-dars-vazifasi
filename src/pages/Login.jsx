import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import mail from "../assets/sms.svg";
import lok from "../assets/lock.svg";
import google from "../assets/google.svg";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
const Login = () => {
const navigate = useNavigate();

function handleLogin() {
  navigate("/home")
}
  return (
    <div className="w-[500px] bg-white rounded-lg mx-auto h-[500px] mt-4 py-6 px-[40px]">
      <h1 className="text-center font-bold text-2xl mb-8">Welcome back!</h1>
      <div>
        <form className="">
          <div className="email mb-4 relative">
            <label htmlFor="name" className="block mb-2 text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[45px] border outline-none text-base rounded-md indent-10"
            />
            <img
              src={mail}
              alt="user"
              className="absolute text-xl top-11 left-2"
            />
          </div>
          <div className="password mb-4 relative">
            <label htmlFor="name" className="block mb-2 text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-[45px] border outline-none text-base rounded-md indent-10"
            />
            <MdOutlineRemoveRedEye className="absolute top-11 left-[380px] text-[20px] text-gray-500 cursor-pointer" />
            <FaRegEyeSlash className="absolute top-11 left-[380px] text-[20px] text-gray-500  cursor-pointer" />
            <img
              src={lok}
              alt="user"
              className="absolute text-xl top-11 left-2"
            />
          </div>
          <div onClick={handleLogin} className="button5 span w-full bg-[#f8448c] rounded-md cursor-pointer border shadow-md h-[50px] py-[12.5px] mt-7 mb-5">
            <p className="text-center text-white ">Log In</p>
          </div>
          <div className="with-google flex w-full border h-[50px] rounded-md items-center justify-center gap-4 cursor-pointer">
            <img src={google} alt="google" width={30} height={30} />
            <span className="text-base ">Sign Up with Google</span>
          </div>
          <p className="text-center my-4 cursor-pointer">or login with SSO</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
