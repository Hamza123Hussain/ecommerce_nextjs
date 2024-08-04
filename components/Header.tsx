'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LOGO from '../public/LOGO.webp'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs'
import { useAppContext } from '@/utils/Context'
import DropDown from './DropDown'
const Header = () => {
  const Router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const { cartcount } = useAppContext()
  const { user } = useUser()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Return null until client-side rendering is confirmed
  }
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
        <div className="relative">
          <ShoppingCart
            className="cursor-pointer text-gray-800 hover:text-gray-600"
            onClick={() => Router.push('/cart')}
            size={25}
          />
          {cartcount > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartcount}
            </span>
          )}
        </div>
        {user ? (
          <div className="relative flex items-center gap-3 p-2">
            <UserButton />
            <h3
              onDoubleClick={() => setIsHovered(false)}
              onClick={() => setIsHovered(true)}
            >
              {user?.fullName}
            </h3>
            {isHovered && <DropDown />}
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
