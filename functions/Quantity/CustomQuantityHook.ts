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

      if (!Found) {
        console.error('Product not found')
        return
      }
      const data = await updateProductQuantityAndStock(
        Found,
        '/api/Product/UPDATEQTY/Incrment'
      )
      if (data) {
        setcartcount((prev: number) => prev + 1)
        setProducts((prevProducts: Product[]) => {
          return prevProducts.map((product: Product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        })

        setProducts((prevProducts: Product[]) =>
          prevProducts.map((single) =>
            single.id === id ? { ...single, stock: single.stock - 1 } : single
          )
        )
        setCart((prevCart: Product[]) => {
          if (!prevCart) return [] // Initialize prevCart if undefined
          return prevCart.map((item: Product) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1, stock: item.stock - 1 }
              : item
          )
        })
      }
    },
    [setProducts, products, cart, setCart]
  )

  const addToCart = useCallback(
    async (product: Product) => {
      // Update product quantity and stock in the database
      const data = await updateProductQuantityAndStock(
        product,
        '/api/Product/UPDATEQTY/Incrment'
      )
      if (data) {
        setcartcount((prev: number) => prev + 1)

        // Update products state
        setProducts((prevProducts: Product[]) =>
          prevProducts.map((single: Product) =>
            single.id === product.id
              ? { ...single, quantity: single.quantity + 1 }
              : single
          )
        )

        setProducts((prevProducts: Product[]) =>
          prevProducts.map((single) =>
            single.id === product.id
              ? { ...single, stock: single.stock - 1 }
              : single
          )
        )

        // Update cart state
        setCart((prevCart: Product[]) => {
          // Check if the product already exists in the cart
          const existingProductIndex = prevCart.findIndex(
            (item) => item.id === product.id
          )

          if (existingProductIndex > -1) {
            // Product exists in the cart, update its quantity and stock
            return prevCart.map((item, index) =>
              index === existingProductIndex
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    stock: item.stock - 1,
                  }
                : item
            )
          } else {
            // Product doesn't exist in the cart, add it
            return [
              ...prevCart,
              {
                ...product,
                quantity: 1, // Initialize with 1 as it's the first time it's added to the cart
                stock: product.stock - 1,
              },
            ]
          }
        })
      }
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
        // setcartcount((prev: number) => prev - 1)
        const data = await updateProductQuantityAndStock(
          product,
          '/api/Product/UPDATEQTY/Decrement'
        )
        if (data) {
          setcartcount((prev: number) => prev - 1)
          setProducts((prevProducts: Product[]) =>
            prevProducts.map((single) =>
              single.id === id ? { ...single, stock: single.stock + 1 } : single
            )
          )
          // Decrement quantity in local state
          setProducts((prevProducts: Product[]) =>
            prevProducts.map((single) =>
              single.id === id
                ? { ...single, quantity: single.quantity - 1 }
                : single
            )
          )

          if (product.quantity > 1) {
            // Update the cart
            setCart((prevCart: Product[]) =>
              prevCart.map((element: Product) =>
                element.id === id
                  ? {
                      ...element,
                      quantity: element.quantity - 1,
                      stock: product.stock + 1,
                    }
                  : element
              )
            )
          } else {
            // Remove product from cart if quantity is 1
            setCart((prevCart: Product[]) =>
              prevCart.filter((element: Product) => element.id !== id)
            )
          }
        }
      } catch (error) {
        console.error('Error updating product quantity and stock:', error)
      }
    },
    [products, setProducts, setCart]
  )
  const removeFromCart = async (id: any) => {
    const product = products.find((element: Product) => element.id === id)
    // setcartcount((prev: number) => prev - product.quantity)
    const data = await updateProductQuantityAndStock(
      product,
      '/api/Product/UPDATEQTY/Reversal'
    )

    if (data) {
      setcartcount((prev: number) => prev - product.quantity)
      setProducts((prevProducts: Product[]) =>
        prevProducts.map((single) =>
          single.id === id
            ? { ...single, stock: single.stock + single.quantity }
            : single
        )
      )
      setProducts((Element: Product[]) => {
        return Element.map((single: Product) =>
          single.id === id ? { ...single, quantity: 0 } : single
        )
      })

      setCart((Prev: Product[]) => {
        return Prev.filter((item: Product) => item.id !== id)
      })
    } else throw new Error('Failed to update stock')
  }
  return {
    addToCart,
    increment,
    decrement,
    removeFromCart,
  }
}

export default useCartActions
