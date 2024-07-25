'use client'
import { useCallback } from 'react'

import { Product } from '@/utils/ProductInterface'
import { useAppContext } from '@/utils/Context'
import { updateProductQuantityAndStock } from './IncrementBackend'

const useCartActions = () => {
  const { setCart, setProducts, products, cart, setcartcount } = useAppContext()

  const increment = useCallback(
    async (id: any) => {
      const Found = products.find((element: Product) => element.id === id)
      console.log('FOUNDED PRODUCT : ', Found)
      if (Found) {
      }

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
    [setProducts, products, cart, setCart]
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
        // fix here like no
        return [...prevCart, { ...product, quantity: product.quantity + 1 }]
      })
    },
    [setProducts, products, cart, setCart]
  )

  const decrement = useCallback(
    async (id: any) => {
      try {
        const product = products.find((element: Product) => element.id === id)
        if (!product) {
          console.log('Product not found')
          return
        }

        if (product.quantity > 1) {
          // Decrement quantity in local state
          setProducts((prevProducts: Product[]) =>
            prevProducts.map((single) =>
              single.id === id
                ? { ...single, quantity: single.quantity - 1 }
                : single
            )
          )

          // Update the cart
          setCart((prevCart: Product[]) =>
            prevCart.map((element: Product) =>
              element.id === id
                ? { ...element, quantity: element.quantity - 1 }
                : element
            )
          )
        } else {
          // Remove product from cart if quantity is 1
          setCart((prevCart: Product[]) =>
            prevCart.filter((element: Product) => element.id !== id)
          )
        }

        // Call the API to update the stock in the backend
        const response = await fetch('/api/Product/UPDATEQTY/Decrement', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: product.id, stock: product.stock }),
        })

        if (!response.ok) {
          throw new Error('Failed to update stock')
        }

        // Optionally update the product stock in local state if needed
        setProducts((prevProducts: Product[]) =>
          prevProducts.map((single) =>
            single.id === id ? { ...single, stock: single.stock + 1 } : single
          )
        )
      } catch (error) {
        console.error('Error updating product quantity and stock:', error)
      }
    },
    [products, setProducts, setCart]
  )
  const removeFromCart = (id: any) => {
    setProducts((Element: Product[]) => {
      return Element.map((single: Product) =>
        single.id === id ? { ...single, quantity: 0 } : single
      )
    })

    setCart((Prev: Product[]) => {
      return Prev.filter((item: Product) => item.id !== id)
    })
  }
  return {
    addToCart,
    increment,
    decrement,
    removeFromCart,
  }
}

export default useCartActions
