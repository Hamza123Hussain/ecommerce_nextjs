'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import Cartitem from '@/components/Cart/Cartitem'
import CartDetails from '@/components/Cart/CartDetails'
import { Product } from '@/utils/ProductInterface'

const CartPage = () => {
  const { cart } = useAppContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // This ensures that the component is only rendered on the client side
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Return an empty div or loading state during server-side rendering
    return (
      <div className=" flex gap-3 mt-52 justify-center items-center">
        <div className="loader"></div> <div className="loader"></div>{' '}
        <div className="loader"></div>{' '}
      </div>
    )
  }

  const total = cart.reduce(
    (total: any, element: Product) => {
      total.totalprice = total.totalprice + element.price * element.quantity
      total.totalquantity = total.totalquantity + element.quantity
      return total
    },
    { totalprice: 0, totalquantity: 0 }
  )

  const tax = (total.totalprice * 16) / 100
  const shipping = tax + total.totalprice > 1500 ? 0 : 250

  return (
    <div className="container mx-auto mt-5 min-h-screen p-2 bg-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          {cart.length === 0 ? (
            <p className="text-lg text-center">Your cart is empty.</p>
          ) : (
            cart.map((item: Product) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center border-black hover:shadow-md hover:shadow-blue-100 gap-4 mb-4 p-4 "
              >
                <Cartitem item={item} />
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <CartDetails
            totalPrice={total.totalprice}
            tax={tax}
            shipping={shipping}
            quantity={total.totalquantity}
          />
        )}
      </div>
    </div>
  )
}

export default CartPage
