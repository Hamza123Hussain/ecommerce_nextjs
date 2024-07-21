'use client'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { Product } from '@/utils/ProductInterface'

interface AppContextProps {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const getCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.error('Error parsing cart from localStorage', error)
    return []
  }
}

const getProductsFromLocalStorage = () => {
  try {
    const savedProducts = localStorage.getItem('products')
    return savedProducts ? JSON.parse(savedProducts) : []
  } catch (error) {
    console.error('Error parsing products from localStorage', error)
    return []
  }
}

export const AppContext = createContext<AppContextProps | any | undefined>(
  undefined
)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(getCartFromLocalStorage)
  const [products, setProducts] = useState<Product[]>(
    getProductsFromLocalStorage
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products))
    }
  }, [products])

  return (
    <AppContext.Provider
      value={{
        cart,
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
