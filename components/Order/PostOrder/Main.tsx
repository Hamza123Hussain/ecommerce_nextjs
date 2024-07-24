'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/utils/Context'

import { useRouter } from 'next/navigation'
import GoBackButton from '../BackButton'
import OrderDetails from './OrdeItems'
import OrderSum from './Ordersummary'
import { Product } from '@/utils/ProductInterface'

const PostOrderPage: React.FC = () => {
  const { cart, userDetail } = useAppContext()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // This ensures that the component is only rendered on the client side
    setIsClient(true)
  }, [])

  return (
    <></>
    // <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center p-4">
    //   <GoBackButton />
    //   <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl mt-6">
    //     <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
    //       Thank You for Your Order!
    //     </h2>
    //     <div className="mb-6">
    //       <h3 className="text-2xl font-bold mb-4 text-gray-700">
    //         User Details
    //       </h3>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         <OrderDetails label="Name" value={userDetail.Name} />
    //         <OrderDetails label="Phone Number" value={userDetail.Phone} />
    //         <OrderDetails label="Email" value={userDetail.Email} />
    //         <OrderDetails label="Address" value={userDetail.Address} />
    //         <OrderDetails label="City" value={userDetail.City} />
    //         <OrderDetails label="State" value={userDetail.State} />
    //         <OrderDetails label="Zip Code" value={userDetail.zipcode} />
    //         <OrderDetails label="Country" value={userDetail.Country} />
    //       </div>
    //     </div>
    //     <div className="mb-6">
    //       <h3 className="text-2xl font-bold mb-4 text-gray-700">
    //         Cart Details
    //       </h3>

    //     </div>

    //     <button
    //       onClick={() => router.push('/')}
    //       className="w-full py-3 mt-6 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-transform duration-200"
    //     >
    //       Go Back to Home
    //     </button>
    //   </div>
    // </div>
  )
}

export default PostOrderPage
