'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GoBackButton from '@/components/User/GoBack'
import UserInput from '@/components/User/UserInput'
import { fields } from '@/components/User/UserDetailsArray'

const UserDetailsForm = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    console.log('User Details Submitted:', userDetails)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r bg-white flex items-center justify-center p-4">
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
