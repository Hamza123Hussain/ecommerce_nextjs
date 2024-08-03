import { UserDetails } from '@/utils/UserDetailInterface'
import React from 'react'

const UserCardForAdmin = ({ user }: { user: UserDetails }) => {
  return (
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
  )
}

export default UserCardForAdmin
