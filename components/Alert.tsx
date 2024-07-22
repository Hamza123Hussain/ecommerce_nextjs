import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

interface CustomAlertProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  type,
  onClose,
}) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500'
  const Icon = type === 'success' ? CheckCircle : XCircle

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-0 left-0 right-0 p-4 ${bgColor} text-white shadow-md z-50 flex items-center justify-between`}
    >
      <div className="flex items-center">
        <Icon className="h-6 w-6 mr-2" />
        <span>{message}</span>
      </div>
      <button onClick={onClose} className="text-white">
        <XCircle className="h-6 w-6" />
      </button>
    </motion.div>
  )
}

export default CustomAlert
