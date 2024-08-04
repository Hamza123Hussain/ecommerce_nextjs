'use client'
import UserCardForAdmin from '@/components/User/UserCardForAdmin'
import { GetAllUsers } from '@/functions/User/GetAllUser'
import { useAppContext } from '@/utils/Context'
import { UserDetails } from '@/utils/UserDetailInterface'
import { useUser } from '@clerk/nextjs'
import { ArrowLeftCircle } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Allusers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const { index, setindex } = useAppContext()
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
    <>
      {' '}
      <div className="mt-10 flex justify-between items-center">
        <ArrowLeftCircle
          onClick={() => setindex(0)}
          size={35}
          className=" ml-10 cursor-pointer"
        />{' '}
        <h1 className="text-xl md:text-5xl font-bold text-gray-800">
          User List
        </h1>
        <div className="bg-transparent text-transparent">sas</div>
      </div>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
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
    </>
  )
}

export default Allusers
