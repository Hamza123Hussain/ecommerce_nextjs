'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const GoBackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="absolute top-4 left-4 text-gray-700 hover:text-gray-900 transition-colors"
    >
      <ArrowLeft size={24} />
    </button>
  )
}

export default GoBackButton
