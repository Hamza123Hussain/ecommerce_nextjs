// src/pages/api/Product/ADD.js
import { db } from '@/utils/FireBaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export const POST = async (req: any) => {
  try {
    const payload = await req.json()

    const product = {
      name: payload.Product.name,
      description: payload.Product.description,
      price: parseFloat(payload.Product.price.toString()),
      stock: parseInt(payload.Product.stock.toString()),
      category: payload.Product.category,
      image_url: payload.Product.image_url,
      quantity: parseInt(payload.Product.quantity.toString()),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const docRef = await addDoc(collection(db, 'products'), product)

    return NextResponse.json({ id: docRef.id, ...product }, { status: 201 })
  } catch (error: any) {
    console.error('DATABASE ERROR', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
