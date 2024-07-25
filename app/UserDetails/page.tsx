'use client'
import React, { useState, useEffect } from 'react'
import UserDetailsForm from '@/components/User/WithoutLogin'
import { useUser } from '@clerk/nextjs'
import UserList from '@/components/User/List'
import { useAppContext } from '@/utils/Context'

const UserListPage = () => {
  const { userDetail } = useAppContext()

  const { user } = useUser()

  return <div>{user || userDetail ? <UserList /> : <UserDetailsForm />}</div>
}

export default UserListPage
