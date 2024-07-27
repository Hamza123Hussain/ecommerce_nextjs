import { User } from '@/utils/UserDetailsInterFace'
import React from 'react'

const UserAddress = ({ userDetail }: { userDetail: User }) => {
  return (
    <div className="border-t border-gray-200 pt-4">
      <p className="text-xl font-semibold text-gray-900">Shipping Address</p>
      <p className="text-sm text-gray-700 mt-2">{userDetail.Address}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-lg font-semibold text-gray-800">Country</p>
          <p className="text-sm text-gray-600">{userDetail.Country}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">City</p>
          <p className="text-sm text-gray-600">{userDetail.City}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">State</p>
          <p className="text-sm text-gray-600">{userDetail.State}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">Zipcode</p>
          <p className="text-sm text-gray-600">{userDetail.Zipcode}</p>
        </div>
      </div>
    </div>
  )
}

export default UserAddress
