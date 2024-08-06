import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const POST = async (req: any) => {
  try {
    const payload = await req.json()

    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name: payload?.Product.name,
          description: payload?.Product.description,
          price: parseFloat(payload?.Product.price.toString()),
          stock: parseInt(payload?.Product.stock.toString()),
          category: payload?.Product.category,
          image_url: payload?.Product.image_url,
          quantity: payload?.Product.quantity,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()

    if (data) {
      return NextResponse.json(data, {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Adjust this as needed
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
    } else {
      return NextResponse.json(
        { error },
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Adjust this as needed
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      )
    }
  } catch (error) {
    console.log('DATABASE ERROR', error)
    return NextResponse.json(
      { error: 'Database error' },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Adjust this as needed
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    )
  }
}
