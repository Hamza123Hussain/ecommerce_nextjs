import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export const POST = async (req: any) => {
  try {
    const payload = await req.json()
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
          cart: payload?.cart,
          totalprice: payload?.total.totalprice,
          totalquantity: payload?.total.totalquantity,
          tax: Tax,
          shipping: shipping,
          total: Total,
          name: payload?.userDetail.Name,
          email: payload?.userDetail.Email,
          address: payload?.userDetail.Address,
          city: payload?.userDetail.City,
          state: payload.userDetail.State,
          country: payload?.userDetail.Country,
          zipcode: payload?.userDetail.zipcode,
          userid: payload?.userid,

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
