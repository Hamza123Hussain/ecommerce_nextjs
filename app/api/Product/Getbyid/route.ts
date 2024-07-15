import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const GET = async (req: any) => {
  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`)
    const id = searchParams.get('id')
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .select()
    if (data) {
      return NextResponse.json(data, { status: 201 })
    }
    return NextResponse.json(error, { status: 404 })
  } catch (error) {
    console.log('databse error', error)
  }
}
