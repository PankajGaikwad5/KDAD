import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../lib/mongodb';
import Projects from '../../../models/projects';

export async function GET(request, { params }) {
  const { id } = params; // No need to `await` `params`, it's not a Promise
  await connectMongoDB();

  try {
    const projects = await Projects.findOne({ _id: id });

    if (!projects) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // console.log(projects); // Correct method
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error('Error fetching project:', error); // Log the actual error
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
