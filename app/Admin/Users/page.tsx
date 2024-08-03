'use client'
import { GetAllUsers } from '@/functions/User/GetAllUser'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [users, setUsers] = useState([])

  const GetUsers = async () => {
    try {
      const data = await GetAllUsers()
      if (data) {
        console.log('USER DATA : ', data)
        setUsers(data)
      }
    } catch (error) {
      console.log('UNABLE TO FETCH', error)
    }
  }

  useEffect(() => {
    GetUsers()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-10">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {users.map((user: any) => (
          <div
            key={user.id}
            className="bg-white text-xs sm:text-sm shadow-lg rounded-lg overflow-hidden p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{user.Name}</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> {user.Email}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> {user.Phone}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Address:</span> {user.Address}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">City:</span> {user.City}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">State:</span> {user.State}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Country:</span> {user.Country}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Zipcode:</span> {user.zipcode}
            </p>
            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Joined:</span>{' '}
              {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
