import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const GET = async (req: any) => {
  try {
    const { data, error } = await supabase.from('products').select('*')
    if (error) {
      console.log('Supabase error:', error)
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 404,
      })
    }
    console.log('Fetched data from Supabase:', data)
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    })
  } catch (error) {
    console.log('Database error:', error)
    return new NextResponse(JSON.stringify({ error: 'Database error' }), {
      status: 500,
    })
  }
}
