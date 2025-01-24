import { NextResponse } from 'next/server';
import connectMongoDB from '../../../lib/mongodb';
import Features from '../../models/features';

export async function POST(req) {
  try {
    const { title, images } = await req.json();

    if (!title || !images || !Array.isArray(images)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    await connectMongoDB();

    // const newProject = new Features({ title, images });
    // await newProject.save();
    await Features.create({
      title,
      images,
    });

    return NextResponse.json({ msg: 'Project saved successfully' });
  } catch (error) {
    console.error('Error saving project:', error);
    return NextResponse.json(
      { error: 'Error saving project' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const features = await Features.find();
    return NextResponse.json({ features });
  } catch (error) {
    console.error('Error fetching topics:', error);
    return NextResponse.json({ msg: 'Error fetching topics' }, { status: 500 });
  }
}
