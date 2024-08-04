'use client'
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { GetUserList } from '@/functions/User/GetUserList'
import AddUserModal from '@/components/User/Modal'
import UserDetailsForList from '@/components/User/UserDetailsForList'
import { useRouter } from 'next/navigation'
import UserDetailsForm from './WithoutLogin'

const UserList = () => {
  const [users, setUsers] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const { user } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const Getdata = async () => {
    const data = await GetUserList(user?.id)
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    if (user?.id) {
      Getdata()
    }
  }, [user?.id])

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <span className="loader"></span>
      </div>
    ) // Display loading indicator while fetching data
  }

  if (users.length === 0) {
    return <UserDetailsForm />
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">User List</h1>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          onClick={() => setShowModal(true)}
        >
          Add New
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <li
            key={user.id}
            className={`p-6 border rounded-lg shadow-lg ${
              selectedUserId === user.id ? 'bg-blue-100' : 'bg-white'
            } transition-all duration-300`}
          >
            <UserDetailsForList
              user={user}
              setSelectedUserId={setSelectedUserId}
              setUsers={setUsers}
              selectedUserId={selectedUserId}
            />
          </li>
        ))}
      </ul>
      {showModal && <AddUserModal onClose={() => setShowModal(false)} />}
      <div className="flex justify-center mt-6">
        <button
          disabled={selectedUserId === null}
          className={`${
            selectedUserId === null ? 'bg-blue-300' : 'bg-blue-500'
          }  text-white px-6 py-2 rounded-lg shadow-lg  transition-all duration-300`}
          onClick={() => router.push('/Order')}
        >
          Go To Order
        </button>
      </div>
    </div>
  )
}

export default UserList
