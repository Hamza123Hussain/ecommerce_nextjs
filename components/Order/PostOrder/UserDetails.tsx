'use client'
import { useAppContext } from '@/utils/Context'
import React from 'react'
import UserAddress from './UserAddres'
import { useUser } from '@clerk/nextjs'

const UserDetails = () => {
  const { user } = useUser()
  const { userDetail } = useAppContext()
  return (
    <div className="bg-white w-full p-8 md:p-10 xl:p-12 flex flex-col rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl">
      <h3 className="text-2xl font-bold leading-7 text-gray-900 mb-6">
        Customer Details
      </h3>
      <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {userDetail.Name}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center space-x-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <path
                d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 7L12 13L21 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm text-gray-700">{userDetail.Email}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000"
              width={24}
            />
            <p className="text-sm text-gray-700">{userDetail.Phone}</p>
          </div>
        </div>
        <UserAddress userDetail={userDetail} />
      </div>
    </div>
  )
}

export default UserDetails
