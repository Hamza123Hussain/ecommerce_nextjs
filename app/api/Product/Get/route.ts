// src/pages/api/Product/GET.ts
import { NextResponse } from 'next/server'
import { db } from '@/utils/FireBaseConfig' // Adjust the path if necessary
import { collection, getDocs } from 'firebase/firestore'

export const GET = async () => {
  try {
    // Reference to the 'products' collection
    const productsCollection = collection(db, 'products')

    // Fetch all documents in the collection
    const productSnapshot = await getDocs(productsCollection)

    // Map over the documents to get the data
    const products = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    // Respond with the fetched data
    return NextResponse.json(products, {
      status: 200,
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
