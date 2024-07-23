import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export const POST = async (req: any) => {
  try {
    const payload = await req.json()
    const userId = uuidv4() // Generate a UUID for the user
    const Tax = payload.total.totalprice * 0.16
    const shipping = payload.total.totalprice >= 1000 ? 0 : 250
    const Total =
      payload.total.totalprice >= 1000
        ? payload.total.totalprice + Tax
        : payload.total.totalprice + Tax + shipping
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          userid: userId,
          cart: payload?.cart,
          totalprice: payload?.total.totalprice,
          totalquantity: payload?.total.totalquantity,
          Tax: Tax,
          Shipping: shipping,
          Total: Total,
          Name: payload?.userDetail.Name,
          Email: payload?.userDetail.Email,
          Address: payload?.userDetail.Address,
          City: payload?.userDetail.City,
          State: payload.userDetail.State,
          Country: payload?.userDetail.Country,
          zipcode: payload?.userDetail.zipcode,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 404 })
    }

    return NextResponse.json(true, { status: 201 })
  } catch (error) {
    console.log('DATABASE ERROR', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
