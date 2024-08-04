'use client'
import React from 'react'
import { UserDetails } from '@/utils/UserDetailInterface'

interface UserDetailsProps {
  userDetail: UserDetails
}

const UserDetailsComponent: React.FC<UserDetailsProps> = ({ userDetail }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-700">User Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">Name</span>
          <span className="text-gray-900">{userDetail.Name}</span>
        </div>
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">Phone Number</span>
          <span className="text-gray-900">{userDetail.Phone}</span>
        </div>
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">Email</span>
          <span className="text-gray-900">{userDetail.Email}</span>
        </div>
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">Address</span>
          <span className="text-gray-900">{userDetail.Address}</span>
        </div>
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">City</span>
          <span className="text-gray-900">{userDetail.City}</span>
        </div>
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">State</span>
          <span className="text-gray-900">{userDetail.State}</span>
        </div>
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">Zip Code</span>
          <span className="text-gray-900">{userDetail.zipcode}</span>
        </div>
        <div className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
          <span className="font-semibold text-gray-700">Country</span>
          <span className="text-gray-900">{userDetail.Country}</span>
        </div>
      </div>
    </div>
  )
}

export default UserDetailsComponent
