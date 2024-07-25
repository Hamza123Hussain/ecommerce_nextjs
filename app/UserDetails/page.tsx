'use client'
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { GetUserList } from '@/functions/User/GetUserList'
import AddUserModal from '@/components/User/Modal'
import { useRouter } from 'next/navigation'

const UserListPage = () => {
  const Router = useRouter()
  const [users, setUsers] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const { user } = useUser()

  const Getdata = async () => {
    const data = await GetUserList(user?.id)
    setUsers(data)
  }

  useEffect(() => {
    Getdata()
  }, [users])

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId)
  }

  const handleEditUser = (userId: string) => {
    Router.push(`/UserDetails/Update/${userId}`)
  }

  const handleDeleteUser = (userId: string) => {
    console.log(`Delete user: ${userId}`)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-700">User List</h1>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          onClick={() => setShowModal(true)}
        >
          Add New
        </button>
      </div>
      <ul className="space-y-6">
        {users.map((user) => (
          <li
            key={user.id}
            className={`flex flex-col md:flex-row md:items-center justify-between p-6 border rounded-lg shadow-lg ${
              selectedUserId === user.id ? 'bg-blue-100' : 'bg-white'
            } transition-all duration-300`}
          >
            <div className="flex items-center space-x-6 w-full md:w-auto">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={selectedUserId === user.id}
                onChange={() => handleSelectUser(user.id)}
              />
              <div className="flex flex-col md:flex-row md:items-center space-x-4">
                <span className="font-medium text-lg text-gray-800">
                  {user.Name}
                </span>
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
          </li>
        ))}
      </ul>
      {showModal && <AddUserModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default UserListPage
