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
  const router = useRouter()

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId)
    setUserDetail(user)
  }

  const handleEditUser = (userId: string) => {
    router.push(`/UserDetails/Update/${userId}`)
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
    <div className="p-6 bg-gradient-to-r from-white to-blue-50 border border-gray-200 rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={selectedUserId === user.id}
        onChange={() => handleSelectUser(user.id)}
      />{' '}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col space-y-1">
          <h2 className="text-2xl font-bold text-blue-800">{user.Name}</h2>
          <span className="text-blue-600">Email: {user.Email}</span>
          <span className="text-blue-600">Phone: {user.Phone}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 text-gray-700">
        <span>Address: {user.Address}</span>
        <span>City: {user.City}</span>
        <span>State: {user.State}</span>
        <span>Country: {user.Country}</span>
        <span>Zipcode: {user.zipcode}</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <button
          className="bg-gradient-to-r from-green-500 to-green-600 w-full text-white px-4 py-2 rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300"
          onClick={() => handleEditUser(user.id)}
        >
          Edit
        </button>
        <button
          className="bg-gradient-to-r from-red-500 to-red-600 w-full text-white px-4 py-2 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300"
          onClick={() => handleDeleteUser(user.id)}
        >
          Trash
        </button>
      </div>
    </div>
  )
}

export default UserDetailsForList
