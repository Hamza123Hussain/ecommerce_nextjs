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
    <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center bg-slate-300 shadow-md shadow-slate-800 sm:px-4 py-2 gap-5 sm:gap-0">
      <div
        onClick={() => Router.push('/')}
        className=" flex gap-2 items-center"
      >
        {' '}
        <Image
          src={LOGO}
          width={100}
          height={100}
          className=" w-12 sm:w-24  rounded-full cursor-pointer "
          alt="logo"
        />
        <h1 className="bg-gradient-to-r cursor-pointer hover:brightness-110 from-blue-500 to-purple-500 bg-clip-text text-3xl sm:text-6xl font-extrabold text-transparent">
          TechTreasure
        </h1>
      </div>
      <div className=" flex items-center justify-end gap-5">
        <ShoppingCart
          className=" cursor-pointer"
          onClick={() => Router.push('/cart')}
          size={50}
        />
        {user ? (
          <div className=" flex items-center gap-3 p-2">
            <UserButton />
            <h3> {user?.fullName}</h3>
          </div>
        ) : (
          <button className=" rounded-xl px-10 py-2 bg-green-500 hover:brightness-110 text-white border-2">
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
