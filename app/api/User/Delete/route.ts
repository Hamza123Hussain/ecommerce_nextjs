import { supabase } from '@/utils/Supabase'
import { NextResponse } from 'next/server'

export const DELETE = async (req: any) => {
  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`)
    const id = searchParams.get('id')

    const { data, error } = await supabase
      .from('Users')
      .delete()
      .eq('id', id)
      .select()

    if (data) {
      return NextResponse.json(true, { status: 201 })
    }

    return NextResponse.json(error, { status: 404 })
  } catch (error) {
    return NextResponse.json({ message: `ERROR ON DATABASE ${error}` })
  }
}
