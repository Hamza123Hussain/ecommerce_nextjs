import { DeleteUser } from '@/functions/User/DeleteDetail'
import { useAppContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserDetailsForList = ({
  user,
  setUsers,
  setSelectedUserId,
  selectedUserId,
}: {
  user: any
  setUsers: any
  setSelectedUserId: any
  selectedUserId: any
}) => {
  const { setUserDetail } = useAppContext()
  const Router = useRouter()
  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId)
    setUserDetail(user)
  }

  const handleEditUser = (userId: string) => {
    Router.push(`/UserDetails/Update/${userId}`)
  }

  const handleDeleteUser = async (userId: string) => {
    const data = await DeleteUser(userId)
    if (data) {
      setUsers((prevUsers: any) =>
        prevUsers.filter((user: any) => user.id !== userId)
      )
    }
  }
  return (
    <>
      <div className="flex items-center space-x-6 w-full md:w-auto">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={selectedUserId === user.id}
          onChange={() => handleSelectUser(user.id)}
        />
        <div className="flex flex-col md:flex-row md:items-center space-x-4">
          <span className="font-medium text-lg text-gray-800">{user.Name}</span>
          <span className="text-gray-600">{user.Email}</span>
          <span className="text-gray-600">{user.Phone}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-0 w-full md:w-auto">
        <span className="text-gray-700">{user.Address}</span>
        <span className="text-gray-700">{user.City}</span>
        <span className="text-gray-700">{user.State}</span>
        <span className="text-gray-700">{user.Country}</span>
        <span className="text-gray-700">{user.zipcode}</span>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          onClick={() => handleEditUser(user.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
          onClick={() => handleDeleteUser(user.id)}
        >
          Trash
        </button>
      </div>
    </>
  )
}

export default UserDetailsForList
