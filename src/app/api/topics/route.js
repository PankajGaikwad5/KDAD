import { NextResponse } from 'next/server';
import connectMongoDB from '../../../lib/mongodb';

export async function GET() {
  await connectMongoDB();
  return NextResponse.json({ msg: 'workin' });
}
