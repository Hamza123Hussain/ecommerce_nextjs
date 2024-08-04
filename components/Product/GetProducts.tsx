'use client'
import React, { useEffect } from 'react'
import { useAppContext } from '@/utils/Context'
import { Product } from '@/utils/ProductInterface'
import { getdata } from '@/functions/Product/Fetch'
import HomeProduct from './HomeProduct'
import { useUser } from '@clerk/nextjs'

const GetProducts = () => {
  const { products, setProducts, loading, setLoading } = useAppContext()
  const { user, isLoaded, isSignedIn } = useUser()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        if (isLoaded) {
          if (isSignedIn) {
            const userMetadata = user?.publicMetadata || {}
            const userRole = userMetadata.role || 'Not assigned'
            console.log('User public metadata:', userMetadata)
            console.log('User role:', userRole)

            // Fetch products data
            const data = await getdata()
            console.log('Fetched products:', data)

            // Update products state
            setProducts(data)

            // Store products in localStorage
            localStorage.setItem('products', JSON.stringify(data))

            // Log user information
            console.log('User is signed in:', user)
            console.log('User email:', user?.primaryEmailAddress?.emailAddress)
          } else {
            console.log('User is not signed in')
          }
        } else {
          console.log('User is not loaded yet')
        }
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [isLoaded, isSignedIn, user, setLoading, setProducts])

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <span className="loader"></span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-10 min-h-screen">
      {products?.map((productData: Product) => (
        <div key={productData.id}>
          <HomeProduct product={productData} />
        </div>
      ))}
    </div>
  )
}

export default GetProducts
