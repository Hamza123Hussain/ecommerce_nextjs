import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const PUT = async (req: any) => {
  try {
    const payload = await req.json()
    const { data, error } = await supabase
      .from('products')
      .update([
        {
          stock: payload?.stock - 1,
        },
      ])
      .eq('id', payload?.id)
    if (error) {
      return NextResponse.json({ message: error }, { status: 404 })
    }

    return NextResponse.json(true, { status: 200 })
  } catch (error) {
    console.log('API ERROR', error)
    return NextResponse.json(
      { message: `API ERROR: ${error}` },
      { status: 500 }
    )
  }
}
