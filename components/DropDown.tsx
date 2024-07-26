import { useRouter } from 'next/navigation'
import React from 'react'

const DropDown = () => {
  const Router = useRouter()
  return (
    <div className="absolute top-full mt-2 right-0 w-48 bg-green-200 border border-gray-200 rounded-lg shadow-lg z-10">
      <ul className="flex flex-col p-2">
        {' '}
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
      </ul>
    </div>
  )
}

export default DropDown
