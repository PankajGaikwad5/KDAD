import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../lib/mongodb';
import Features from '../../../models/features';

export async function GET(request, { params }) {
  const { id } = await params;
  await connectMongoDB();

  try {
    const features = await Features.findOne({ _id: id });

    if (!features) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // console.log(projects); // Correct method
    return NextResponse.json({ features }, { status: 200 });
  } catch (error) {
    console.error('Error fetching project:', error); // Log the actual error
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
