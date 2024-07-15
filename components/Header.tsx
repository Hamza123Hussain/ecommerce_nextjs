'use client'
import Image from 'next/image'
import React from 'react'
import LOGO from '../public/LOGO.webp'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
const Header = () => {
  const Router = useRouter()
  return (
    <div className=" flex justify-between items-center bg-slate-300 shadow-md shadow-slate-800 px-4 py-2">
      <Image
        src={LOGO}
        width={100}
        height={100}
        className="  rounded-full cursor-pointer "
        alt="logo"
      />
      <h1 className="bg-gradient-to-r cursor-pointer hover:brightness-110 from-blue-500 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent">
        TechTreasure
      </h1>
      <div className=" flex items-center justify-end gap-10">
        <ShoppingCart onClick={() => Router.push('/cart')} size={40} />
        <button className=" rounded-xl px-10 py-2 bg-green-500 hover:brightness-110 text-white border-2">
          Login
        </button>
      </div>
    </div>
  )
}

export default Header
