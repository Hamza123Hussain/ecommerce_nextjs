import { cors, runMiddleware } from '@/utils/Cors'
import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const POST = async (req: any) => {
  // Run the CORS middleware
  await runMiddleware(req, {}, cors)

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
      })
    } else {
      return NextResponse.json(
        { error },
        {
          status: 404,
        }
      )
    }
  } catch (error) {
    console.log('DATABASE ERROR', error)
    return NextResponse.json(
      { error: 'Database error' },
      {
        status: 500,
      }
    )
  }
}
