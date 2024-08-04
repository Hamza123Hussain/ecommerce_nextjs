'use client'
import UserCardForAdmin from '@/components/User/UserCardForAdmin'
import { GetAllUsers } from '@/functions/User/GetAllUser'
import { UserDetails } from '@/utils/UserDetailInterface'
import { useUser } from '@clerk/nextjs'
import React, { use, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Page = () => {
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
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const GetUsers = async () => {
    try {
      const data = await GetAllUsers()
      if (data) {
        console.log('USER DATA : ', data)
        setUsers(data)
      }
    } catch (error) {
      console.log('UNABLE TO FETCH', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    GetUsers()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-10">User List</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader size={50} color={'#123abc'} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {users.map((user: UserDetails) => (
            <>
              <UserCardForAdmin key={user.id} user={user} />
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default Page
