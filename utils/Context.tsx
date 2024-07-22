'use client'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { Product } from '@/utils/ProductInterface'
import {
  getCartFromLocalStorage,
  getProductsFromLocalStorage,
  getUserFromLocalStorage,
} from './GetLocalStorage'
import { AppContextProps } from './ContextInterfcae'
import { UserDetails } from './UserDetailInterface'

export const AppContext = createContext<AppContextProps | any | undefined>(
  undefined
)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(getCartFromLocalStorage)
  const [products, setProducts] = useState<Product[]>(
    getProductsFromLocalStorage
  )
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails] = useState<UserDetails>(
    getUserFromLocalStorage
  )
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(userDetails))
    }
  }, [userDetails])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products))
    }
  }, [products])

  return (
    <AppContext.Provider
      value={{
        cart,
        userDetails,
        setUserDetails,
        setCart,
        products,
        setProducts,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}
