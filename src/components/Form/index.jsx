import user from "../../assets/user.svg";
import mail from "../../assets/sms.svg";
import lok from "../../assets/lock.svg";
import google from "../../assets/google.svg";
import "./App.css";
const Form = () => {
  return (
    <div>
      <form className="">
        <div className="name mb-4 relative">
          <label htmlFor="name" className="block mb-2 text-base">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full h-[45px] border outline-none text-base rounded-md indent-10"
          />
          <img
            src={user}
            alt="user"
            className="absolute text-xl top-11 left-2"
          />
        </div>
        <div className="email mb-4 relative">
          <label htmlFor="name" className="block mb-2 text-base">
            Email
          </label>
          <input
            type="email"
            placeholder="example@site.com"
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
            Choose Password
          </label>
          <input
            type="password"
            placeholder="Minimum 8 characters"
            className="w-full h-[45px] border outline-none text-base rounded-md indent-10"
          />
          <span className="absolute top-11 left-[360px]">Show</span>
          <img
            src={lok}
            alt="user"
            className="absolute text-xl top-11 left-2"
          />
        </div>
        <div className="button5 span w-full bg-[#f8448c] rounded-md cursor-pointer border shadow-md h-[50px] py-[12.5px] mt-7 mb-5">
          <p className="text-center text-white ">Sign Up</p>
        </div>
        <div className="with-google flex w-full border h-[50px] rounded-md items-center justify-center gap-4 cursor-pointer">
          <img src={google} alt="google" width={30} height={30}/>
          <span className="text-base ">Sign Up with Google</span>
        </div>
        <p className="text-center my-4 cursor-pointer">or login with SSO</p>
      </form>
      <hr />
      <p className="text-[11px]">By lobby the button above, you agree to our <span className="text-[13px] cursor-pointer">Terms of Service</span> and <span className="text-[13px] cursor-pointer">Privacy Policy</span>.</p>
    </div>
  );
};

export default Form;