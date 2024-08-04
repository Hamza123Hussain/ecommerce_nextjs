import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const DropDown = () => {
  const { user } = useUser()
  const Router = useRouter()
  return (
    <div className="absolute top-full mt-2 right-0 w-48 bg-green-200 border border-gray-200 rounded-lg shadow-lg z-10">
      <ul className="flex flex-col p-2">
        {user?.primaryEmailAddress?.emailAddress ==
        'hamzahussain14.hh@gmail.com' ? (
          <li
            onClick={() => Router.push('/Admin')}
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
          >
            Admin
          </li>
        ) : (
          <>
            <li
              onClick={() => Router.push('/Orders')}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              My Orders
            </li>
            <li
              onClick={() => Router.push('/Favourites')}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              My Favourites
            </li>
            <li
              onClick={() => Router.push('/Review')}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              My Reviews
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default DropDown
