import React from 'react'

const CardDetails = () => {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Card Number"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Expiry Date"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>
      <input
        type="text"
        placeholder="Cardholder Name"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
    </div>
  )
}

export default CardDetails
