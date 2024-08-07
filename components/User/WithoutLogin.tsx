'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GoBackButton from '@/components/User/GoBack'
import UserInput from '@/components/User/UserInput'
import { fields } from '@/components/User/UserDetailsArray'
import { CreateUser } from '@/functions/User/CreateUser'
import CustomAlert from '@/components/Alert'
import { useAppContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

const UserDetailsForm = () => {
  const { userDetail, setUserDetail } = useAppContext()
  const [alert, setAlert] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)
  const Router = useRouter()
  const { user } = useUser()
  const [userDetails, setUserDetails] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  })
  console.log(userDetail)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: Boolean = await CreateUser(userDetails, user?.id)

    if (data) {
      setAlert({
        message: 'User details submitted successfully!',
        type: 'success',
      })
    }
    setUserDetail(data)
    console.log(userDetail)
    Router.push('/Order')
  }

  return (
    <div className="min-h-screen bg-gradient-to-r bg-white flex items-center justify-center p-4">
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl relative"
      >
        <GoBackButton />
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          User Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field, index) => (
            <UserInput
              key={index}
              label={field.label}
              type={field.type}
              name={field.name}
              value={userDetails[field.name as keyof typeof userDetails]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          ))}
          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-400 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-transform duration-200"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default UserDetailsForm
