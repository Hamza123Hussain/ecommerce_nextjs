'use client'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const GoBackButton: React.FC = () => {
  const Router = useRouter()

  return (
    <button
      onClick={() => Router.back()}
      className="absolute top-4 left-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
    >
      <ArrowLeft size={24} />
    </button>
  )
}

export default GoBackButton
