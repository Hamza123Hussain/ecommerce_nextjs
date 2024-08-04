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
  getCountFromLocalStorage,
  getPaymentFromLocalStorage,
  getProductsFromLocalStorage,
  getUserFromLocalStorage,
} from './GetLocalStorage'
import { AppContextProps } from './ContextInterfcae'
import { UserDetails } from './UserDetailInterface'

export const AppContext = createContext<AppContextProps | any | undefined>(
  undefined
)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [paymentMethod, setPaymentMethod] = useState(getPaymentFromLocalStorage)
  const [cart, setCart] = useState<Product[]>(getCartFromLocalStorage)
  const [cartcount, setcartcount] = useState(getCountFromLocalStorage)
  const [products, setProducts] = useState(getProductsFromLocalStorage)
  const [userDetail, setUserDetail] = useState<UserDetails>(
    getUserFromLocalStorage
  )

  const total = cart.reduce(
    (total: any, element: Product) => {
      total.totalprice = total.totalprice + element.price * element.quantity
      total.totalquantity = total.totalquantity + element.quantity
      return total
    },
    { totalprice: 0, totalquantity: 0 }
  )

  const tax = (total.totalprice * 0.16).toFixed(2)
  const shipping = total.totalprice > 1000 ? 0 : 250
  const sum = (total.totalprice + parseFloat(tax) + shipping).toFixed(2)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('payment', JSON.stringify(paymentMethod))
    }
  }, [paymentMethod])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartcount', JSON.stringify(cartcount))
    }
  }, [cartcount])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(userDetail))
    }
  }, [userDetail])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products))
    }
  }, [products])

  const [loading, setLoading] = useState(true)

  return (
    <AppContext.Provider
      value={{
        cart,
        userDetail,
        setUserDetail,
        setCart,
        products,
        setProducts,
        loading,
        setLoading,
        total,
        cartcount,
        setcartcount,
        tax,
        shipping,
        sum,
        paymentMethod,
        setPaymentMethod,
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
