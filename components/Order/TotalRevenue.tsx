import React from 'react'

const TotalMoney = ({ totalRevenue }: { totalRevenue: any }) => {
  return (
    <div className="w-full  bg-white rounded-lg px-6 py-2 space-y-2">
      <div className="grid grid-cols-1  gap-4">
        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-green-800">Total</h2>
          <p className="text-2xl font-semibold">
            Rs {totalRevenue.Total.toFixed(2)}
          </p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-blue-800">Tax</h2>
          <p className="text-2xl font-semibold">
            Rs {totalRevenue.Tax.toFixed(2)}
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-yellow-800">Shipping</h2>
          <p className="text-2xl font-semibold">
            Rs {totalRevenue.Shipping.toFixed(2)}
          </p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-purple-800">Subtotal</h2>
          <p className="text-2xl font-semibold">
            Rs {totalRevenue.subtotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TotalMoney
