'use client'
import Image from 'next/image'
import React from 'react'
import LOGO from '../public/LOGO.webp'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs'
const Header = () => {
  const Router = useRouter()
  const { user } = useUser()
  return (
    <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-100 shadow-md shadow-gray-400 sm:px-4 gap-5 sm:gap-0">
      <div
        onClick={() => Router.push('/')}
        className=" flex gap-2 items-center"
      >
        {' '}
        <Image
          src={LOGO}
          width={75}
          height={75}
          className=" w-12 sm:w-18 rounded-full cursor-pointer "
          alt="logo"
        />
        <h1 className="bg-gradient-to-r cursor-pointer hover:brightness-110 from-black to-yellow-600 bg-clip-text text-3xl sm:text-3xl font-extrabold text-transparent">
          TechTreasure
        </h1>
      </div>
      <div className=" flex items-center justify-end gap-5">
        <ShoppingCart
          className=" cursor-pointer"
          onClick={() => Router.push('/cart')}
          size={25}
        />
        {user ? (
          <div className=" flex items-center gap-3 p-2">
            <UserButton />
            <h3> {user?.fullName}</h3>
          </div>
        ) : (
          <button
            onClick={() => Router.push('/sign-in')}
            className=" rounded-xl px-10 py-1 bg-green-400 hover:brightness-110 text-white border-2 text-xl"
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
