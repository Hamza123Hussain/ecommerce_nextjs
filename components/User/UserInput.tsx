'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface UserInputProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const UserInput: React.FC<UserInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-lg font-medium text-gray-700">{label}</label>
      <motion.input
        whileFocus={{ scale: 1.05 }}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-transform duration-200"
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default UserInput
