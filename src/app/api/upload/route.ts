import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { customAlphabet } from 'nanoid'

export const runtime = 'edge'

const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string
export async function PUT(req: Request) {

  const body = await req.json();
  console.log({ body });

  // const file = req.body || ''
  const file =body.file
  const contentType = req.headers.get('content-type') || 'text/plain'
  const filename = `${nanoid()}.${contentType.split('/')[1]}`
  const blob = await put(filename, file, {
    contentType,
    access: 'public',
  })
console.log(blob);

  return NextResponse.json(blob)
}