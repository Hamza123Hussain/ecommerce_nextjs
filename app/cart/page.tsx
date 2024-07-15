'use client'
import { useAppContext } from '@/utils/Context'
import React, { useEffect, useState } from 'react'

const CartPage = () => {
  const { cart } = useAppContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Render nothing on the server
  }

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <img src={item.image_url} alt={item.name} />
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <h5>{item.price}</h5>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  )
}

export default CartPage
