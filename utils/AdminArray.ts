import React from 'react'
import Products from '@/components/Admin/Products'
import AddProduct from '@/components/Admin/AddProduct'
import TotalRevenue from '@/components/Admin/TotalRevenue'
import AllOrders from '@/components/Admin/AllOrders'
import Users from '@/components/Admin/Users'

// Define the type for the admin array objects
type AdminItem = {
  id: number
  Name: string
  Component: React.ComponentType
}

// Create the array using the correct types
export const AdminArray: AdminItem[] = [
  { id: 1, Name: 'Products', Component: Products },
  { id: 2, Name: 'Add Product', Component: AddProduct },
  { id: 3, Name: 'Total Orders', Component: AllOrders },
  { id: 4, Name: 'Total Revenue', Component: TotalRevenue },
  { id: 5, Name: 'Users', Component: Users },
]
