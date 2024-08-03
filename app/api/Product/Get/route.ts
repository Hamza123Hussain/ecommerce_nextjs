import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const { data, error } = await supabase.from('products').select('*')
    if (error) {
      console.log('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 404 })
    }
    console.log('Fetched data from Supabase:', data)
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log('database error', error)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
