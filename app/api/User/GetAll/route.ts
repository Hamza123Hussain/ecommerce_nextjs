import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const { data, error } = await supabase.from('Users').select('*')

    if (data) {
      return NextResponse.json(data, { status: 201 })
    }
    return NextResponse.json(error, { status: 404 })
  } catch (error) {
    return NextResponse.json({ message: `DATABASE ERROR ${error}` })
  }
}
