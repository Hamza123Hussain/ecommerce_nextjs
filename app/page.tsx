'use client'

import GetProducts from '@/components/Product/GetProducts'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  const { user } = useUser()
  console.log('USERRRR', user?.id)

  return (
    <>
      <GetProducts />
    </>
  )
}
