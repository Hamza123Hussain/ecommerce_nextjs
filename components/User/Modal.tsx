'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreateUser } from '@/functions/User/CreateUser'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { useAppContext } from '@/utils/Context'
import CustomAlert from '../Alert'
import UserInput from './UserInput'
import { fields } from './UserDetailsArray'
import GoBackButton from './GoBack'

const AddUserModal = ({ onClose }: { onClose: () => void }) => {
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
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
        className="bg-white p-8 md:p-6 lg:p-8 rounded-lg shadow-2xl w-full max-w-lg md:max-w-xl lg:max-w-2xl relative overflow-y-auto max-h-screen"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
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

export default AddUserModal
