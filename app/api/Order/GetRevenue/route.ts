import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const GET = async (req: any) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('totalprice,tax,shipping,total')

    if (data) {
      return NextResponse.json(data, { status: 201 })
    }
    return NextResponse.json({ error }, { status: 400 })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
