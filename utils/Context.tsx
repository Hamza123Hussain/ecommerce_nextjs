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
  productData: Product | null
  setProductData: React.Dispatch<React.SetStateAction<Product | null>>
  addToCart: () => void
  increment: () => void
  decrement: () => void
}

export const AppContext = createContext<AppContextProps | any | undefined>(
  undefined
)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [productData, setProductData] = useState<Product | null>()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    if (typeof window !== 'undefined' && productData) {
      localStorage.setItem(
        `product-${productData.id}`,
        JSON.stringify(productData)
      )
    }
  }, [productData])

  const addToCart = () => {
    if (productData) {
      setProductData({ ...productData, quantity: 1 })
      setCart((element) => [...element, productData])
      alert('ADDED TO CART')
    }
  }

  const increment = () => {
    if (productData) {
      setProductData({ ...productData, quantity: productData.quantity + 1 })

      setCart((items) => {
        const existingProduct = items.find((item) => item.id === productData.id)
        if (existingProduct) {
          return items.map((item) =>
            item.id === productData.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return [...items, { ...productData, quantity: 1 }]
      })
    }
  }

  const decrement = () => {
    if (productData) {
      if (productData.quantity > 1) {
        setProductData({ ...productData, quantity: productData.quantity - 1 })
        setCart((items) => {
          const existingProduct = items.find(
            (item) => item.id === productData.id
          )
          if (existingProduct) {
            return items.map((item) =>
              item.id === productData.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          }
          return [...items, { ...productData, quantity: 1 }]
        })
      } else if (productData.quantity == 1) {
        setProductData({ ...productData, quantity: productData.quantity - 1 })

        setCart((items) =>
          items.filter((element) => element.id !== productData.id)
        )
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        productData,
        setProductData,
        addToCart,
        increment,
        decrement,
        loading,
        setLoading,
        products,
        setProducts,
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
