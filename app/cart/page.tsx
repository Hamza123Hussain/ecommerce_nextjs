'use client'
import React from 'react'
import { useAppContext } from '@/utils/Context'
import { Trash } from 'lucide-react'
import { Product } from '@/utils/ProductInterface'

const CartPage = () => {
  const { cart, setCart, setProductData } = useAppContext()

  const removeFromCart = (index: number, id: any) => {
    setProductData((element: Product) =>
      element.id === id ? { ...element, quantity: 0 } : element
    ) // making the element quantity zero as it is removed from the cart
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const shipping = 5.0 // Flat rate shipping
  //   const tax = calculateTotal() * 0.1; // 10% tax
  //   const total = calculateTotal() + shipping + tax;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          {cart.length === 0 ? (
            <p className="text-lg text-center">Your cart is empty.</p>
          ) : (
            cart.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-4 mb-4 p-4 border rounded-lg"
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full md:w-20 h-20 object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  {/* <p>Quantity: {item.quantity}</p> */}
                  <p>Price: ${item.price}</p>
                  <p>Quantity : ${item.quantity + 1}</p>
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
          <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              {/* <span>${calculateTotal().toFixed(2)}</span> */}
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              {/* <span>${tax.toFixed(2)}</span> */}
            </div>
            <div className="flex justify-between mb-2 font-bold">
              <span>Total</span>
              {/* <span>${total.toFixed(2)}</span> */}
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
