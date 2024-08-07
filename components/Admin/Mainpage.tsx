'use client'
import { AdminArray } from '@/utils/AdminArray'
import { useAppContext } from '@/utils/Context'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const MainAdmin = () => {
  const { index, setindex } = useAppContext()
  const { user, isLoaded, isSignedIn } = useUser()
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      if (
        user?.primaryEmailAddress?.emailAddress ===
        'hamzahussain14.hh@gmail.com'
      ) {
        // User is allowed
      } else {
        // Redirect or show an error message
        window.location.href = '/no-access'
      }
    } else if (!isSignedIn) {
      window.location.href = '/sign-in'
    }
  }, [isLoaded, isSignedIn, user])

  return (
    <div className=" flex flex-col my-5 dark:bg-white dark:text-black ">
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
            onClick={() => setindex(element.id)}
          >
            <h3 className=" text-center sm:text-3xl  cursor-pointer">
              {element.Name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainAdmin
