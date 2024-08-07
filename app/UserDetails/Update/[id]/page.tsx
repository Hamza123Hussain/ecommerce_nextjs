'use client'
import React, { useEffect, useState } from 'react'
import CustomAlert from '@/components/Alert'
import { useRouter } from 'next/navigation'
import { GetUserbyId } from '@/functions/User/GetDataById'
import UserInput from '@/components/User/UserInput'
import { fields } from '@/components/User/UpdateArray'
import { UpdateUser } from '@/functions/User/Update'

const UserDetailsForm = ({ params }: { params: any }) => {
  const [alert, setAlert] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)
  const Router = useRouter()
  const [userDetails, setUserDetails] = useState<any>({})

  const Getdata = async () => {
    const data = await GetUserbyId(params.id)
    console.log(data)
    setUserDetails(data)
  }

  useEffect(() => {
    Getdata()
  }, [params?.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: Boolean = await UpdateUser(userDetails)

    if (data) {
      setAlert({
        message: 'User details updated successfully!',
        type: 'success',
      })
      Router.back()
    } else {
      setAlert({
        message: 'Failed to update user details!',
        type: 'error',
      })
    }
  }

  return (
    <div className="min-h-screen dark:bg-white  bg-white flex items-center justify-center p-4">
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Edit User Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field, index) => (
            <UserInput
              key={index}
              label={field.label}
              type={field.type}
              name={field.name}
              value={userDetails[field.name as keyof typeof userDetails] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          ))}
          <button
            type="submit"
            className="w-full py-3 bg-blue-400 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-transform duration-200"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserDetailsForm
