import { IoMdMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";
import Form from "../components/Form"

const Register = () => {
  return (
    <div className='w-[500px] bg-white rounded-lg mx-auto h-[580px] mt-4 py-6 px-[40px]'>
      <div className="mode relative ml-[400px] ">
      <IoMdMoon className="absolute cursor-pointer text-xl"/>
      <LuSun  className="absolute opacity-0 cursor-pointer text-xl"/>
      </div>
      <h1 className="text-center font-bold text-2xl mb-8">Let's go</h1> 
      <Form></Form>
    </div>
  )
}

export default Register
