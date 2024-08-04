'use client'
import MyOrders from '@/components/Admin/AllOrders'
import GetProducts from '@/components/Admin/AllProducts'
import Allusers from '@/components/Admin/AllUsers'
import AddProduct from '@/components/Admin/CreateProduct'
import MainAdmin from '@/components/Admin/Mainpage'
import TotalRevenue from '@/components/Admin/TotalRevenue'
import { useAppContext } from '@/utils/Context'
import { useUser } from '@clerk/nextjs'

import React, { useEffect } from 'react'

const Admin = () => {
  const { user, isLoaded, isSignedIn } = useUser()
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      if (
        user?.primaryEmailAddress?.emailAddress ===
        'hamzahussain14.hh@gmail.com'
      ) {
        // User is allowed
      } else {
        // Redirect or show an error message
        window.location.href = '/no-access'
      }
    } else if (!isSignedIn) {
      window.location.href = '/sign-in'
    }
  }, [isLoaded, isSignedIn, user])
  const { index, setindex } = useAppContext()

  return (
    <>
      {index == 0 ? (
        <MainAdmin />
      ) : index == 1 ? (
        <GetProducts />
      ) : index == 2 ? (
        <AddProduct />
      ) : index == 3 ? (
        <MyOrders />
      ) : index == 4 ? (
        <TotalRevenue />
      ) : index == 5 ? (
        <Allusers />
      ) : (
        ''
      )}
    </>
  )
}

export default Admin
