'use client'
import { AdminArray } from '@/utils/AdminArray'

import { useRouter } from 'next/navigation'

import React from 'react'

const Admin = () => {
  const router = useRouter()
  return (
    <div className=" flex flex-col my-5 ">
      <h1 className=" text-center text-3xl text-slate-400">Admin DashBoard</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center mx-auto items-center gap-10 my-5">
        {AdminArray.map((element) => (
          <div
            key={element.id}
            className={` p-10   rounded-lg border-2 border-black  `}
            style={{
              backgroundColor: `${element.bgColor}`,
              color: `${element.textColor}`,
            }}
          >
            <h3
              className=" text-center sm:text-3xl  cursor-pointer"
              onClick={() => router.push(`/Admin/${element.Href}`)}
            >
              {element.Name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin
