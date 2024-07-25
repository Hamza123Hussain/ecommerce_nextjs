import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const POST = async (req: any) => {
  try {
    const payload = await req.json()

    const { data, error } = await supabase
      .from('Users')
      .insert([
        {
          Name: payload?.User.name,
          Email: payload?.User.email,
          Phone: payload?.User.phoneNumber,
          Address: payload?.User.address,
          City: payload?.User.city,
          State: payload?.User.state,
          Country: payload?.User.country,
          zipcode: payload?.User.zipCode,
          userid: payload?.userid,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
    if (data) {
      return NextResponse.json(data, { status: 201 })
    } else {
      console.log(error)
      return NextResponse.json({ error }, { status: 404 })
    }
  } catch (error) {
    console.log('DATABASE ERROR', error)
  }
}
