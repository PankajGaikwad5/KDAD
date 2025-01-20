import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../lib/mongodb';
import Projects from '../../../models/projects';

export async function GET(request, { params }) {
  const { id } = await params;
  await connectMongoDB();
  const projects = await Projects.findOne({ _id: id });
  return NextResponse.json({ projects }, { status: 200 });
}
