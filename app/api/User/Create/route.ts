import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const POST = async (req: any) => {
  try {
    const payload = await req.json()

    const { data, error } = await supabase
      .from('Users')
      .insert([
        {
          Name: payload?.name,
          Email: payload?.email,
          Phone: payload?.phoneNumber,
          Address: payload?.address,
          City: payload?.city,
          State: payload?.state,
          Country: payload?.country,
          zipcode: payload?.zipCode,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
    if (data) {
      return NextResponse.json(true, { status: 201 })
    } else {
      console.log(error)
      return NextResponse.json({ error }, { status: 404 })
    }
  } catch (error) {
    console.log('DATABASE ERROR', error)
  }
}
