import React from 'react'

const Home = (props) => {
  const {users} = props
  return (
    <div>
    <div className="table-section pt-4 w-full ">
    <table className="w-1/2 mx-auto bg-[#191122] text-white border align-middle">
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Name</th>
          <th className="border">Email</th>
          <th className="border">Age</th>
          <th className="border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.length > 0 && users.map((user, index) =>{
            return (
              <tr key={index}>
          <td className="border text-center">{index + 1}</td>
          <td className="border text-center">{user.name}</td>
          <td className="border text-center">{user.email}</td>
          <td className="border text-center">{user.age}</td>
          <td className="border text-center">
            <span className="flex gap-4 justify-center">
              <FaEdit className="cursor-pointer text-blue-600" />
              <FaTrashAlt onClick={() => {handleDelete(user.id)}} className="cursor-pointer  text-red-600 " />
            </span>
          </td>
        </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Home

