import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const PUT = async (req: any) => {
  try {
    const payload = await req.json()

    const { data, error } = await supabase
      .from('Users')
      .update([
        {
          Name: payload?.User.Name,
          Email: payload?.User.Email,
          Phone: payload?.User.Phone,
          Address: payload?.User.Address,
          City: payload?.User.City,
          State: payload?.User.State,
          Country: payload?.User.Country,
          zipcode: payload?.User.zipcode,
          updatedAt: new Date().toISOString(),
        },
      ])
      .eq('id', payload?.User.id)
      .select()
    if (data) {
      return NextResponse.json(data, { status: 201 })
    } else {
      console.log(error)
      return NextResponse.json({ error }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json(
      { message: `Database Error : ${error}` },
      { status: 404 }
    )
  }
}
