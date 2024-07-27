import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const GET = async (req: any) => {
  try {
    const { searchParams } = new URL(req.url) // get does not have a body so sending data via params
    const userId = searchParams.get('id')

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('userid', userId)

    if (data) {
      return NextResponse.json(data, { status: 201 })
    }
    return NextResponse.json({ error }, { status: 400 })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
