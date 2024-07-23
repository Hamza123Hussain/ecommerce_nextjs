import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export const POST = async (req: any) => {
  try {
    const payload = await req.json()
    const userId = uuidv4() // Generate a UUID for the user

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          userid: userId,
          cart: payload.cart,
          totalprice: payload.totalprice,
          totalquantity: payload.totalquantity,
          Name: payload.Name,
          Email: payload.Email,
          Address: payload.Address,
          City: payload.City,
          State: payload.State,
          Country: payload.Country,
          zipcode: payload.zipcode,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 404 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.log('DATABASE ERROR', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
