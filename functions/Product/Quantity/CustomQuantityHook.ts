'use client'
import { useCallback } from 'react'

import { Product } from '@/utils/ProductInterface'
import { useAppContext } from '@/utils/Context'

const useCartActions = () => {
  const { setCart, setProducts, products } = useAppContext()

  const increment = useCallback(
    (id: any) => {
      setProducts((prevProducts: Product[]) => {
        return prevProducts.map((product: Product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      })

      setCart((prevCart: Product[]) => {
        if (!prevCart) return [] // Initialize prevCart if undefined
        return prevCart.map((item: Product) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      })
    },
    [setProducts, setCart]
  )
  const addToCart = useCallback(
    (product: Product) => {
      setProducts((prevProducts: Product[]) => {
        return prevProducts.map((single: Product) =>
          single.id === product.id
            ? { ...single, quantity: single.quantity + 1 } // Properly returning the updated object
            : single
        )
      })

      setCart((prevCart: Product[]) => {
        return [...prevCart, { ...product, quantity: product.quantity + 1 }]
      })
    },
    [setCart]
  )

  const decrement = useCallback(
    (id: any) => {
      const Find = products.find((element: Product) => element.id == id)
      console.log('ELment Found', Find)
      setProducts((Element: Product[]) => {
        return Element.map((single) =>
          single.id == id
            ? { ...single, quantity: single.quantity - 1 }
            : single
        )
      })
      if (Find && Find.quantity > 1) {
        setCart((Prev: Product[]) => {
          return Prev.map((element: Product) =>
            element.id === id
              ? { ...element, quantity: element.quantity - 1 }
              : element
          )
        })
      } else {
        setCart((Prevcart: Product[]) => {
          return Prevcart.filter((element: Product) => element.id !== id)
        })
      }
    },
    [setProducts, setCart]
  )

  return {
    addToCart,
    increment,
    decrement,
  }
}

export default useCartActions
