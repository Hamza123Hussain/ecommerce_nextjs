'use client'
import React, { useState, useEffect } from 'react'
import UserDetailsForm from '@/components/User/WithoutLogin'
import { useUser } from '@clerk/nextjs'
import UserList from '@/components/User/List'
import { useAppContext } from '@/utils/Context'

const UserListPage = () => {
  const { user } = useUser()

  return <div>{user ? <UserList /> : <UserDetailsForm />}</div>
}

export default UserListPage
