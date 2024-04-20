import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

// import Form from "../components/Form"

const Home = () => {
  return (
    <div className='w-full bg-white rounded-lg mx-auto h-screen py-6 px-[40px]'>
      <h1 className="text-center font-bold text-2xl">About users</h1> 
      <div className="flex items-center w-1/2 mx-auto mt-8 ">
        <table className="">  
          <thead>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>John@gmail.com</td>
            <td>1234</td>
            <td>
              <span className="flex gap-4">
              <FaRegEdit />
              <FaRegTrashAlt />
              </span>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
