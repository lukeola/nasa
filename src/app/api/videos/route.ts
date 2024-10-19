import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    data,
  });
}

export async function GET() {
  try {
    const username = `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`;
    const password = `${process.env.CLOUDINARY_API_SECRET}`;
    const credentials = `${username}:${password}`;
    const base64Credentials = Buffer.from(credentials).toString('base64');
    // Fetch data from the external API
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/lukeshub/resources/video',
      {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON response
    const data = await response.json();

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' });
  }
}
