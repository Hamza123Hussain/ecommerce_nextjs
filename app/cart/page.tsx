'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'
import { Trash } from 'lucide-react'
import { Product } from '@/utils/ProductInterface'

const CartPage = () => {
  const { cart, setCart, productData } = useAppContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const removeFromCart = (index: number, id: any) => {
    console.log(productData)
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const shipping = 250

  const totalPrice = cart.reduce((total: number, element: Product) => {
    return total + element.price * element.quantity
  }, 0)

  console.log('TOTAL PRICE', totalPrice)
  const totalquantity = cart.reduce((total: number, element: Product) => {
    return total + element.quantity
  }, 0)

  const tax = (totalPrice * 16) / 100

  if (loading) {
    return <div>Loading...</div> // Display loading indicator while fetching data
  }

  return (
    <div className="container mx-auto mt-5 min-h-screen p-2 bg-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-center  ">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          {cart.length === 0 ? (
            <p className="text-lg text-center">Your cart is empty.</p>
          ) : (
            cart.map((item: any, index: number) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center border-black hover:shadow-md hover:shadow-blue-100 gap-4 mb-4 p-4 border rounded-lg"
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full md:w-20 h-20 object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: Rs{item.price}</p>
                  <p>Total Price: Rs{item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index, item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash size={20} />
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="w-full lg:w-1/3 bg-gray-100 px-2 py-4 mb-2 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Rs {shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>Rs {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 font-bold">
              <span>Total</span>
              <span>Rs {(tax + totalPrice).toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
