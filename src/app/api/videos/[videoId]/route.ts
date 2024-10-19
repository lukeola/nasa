import { NextResponse } from 'next/server';

export async function GET(request: Request, context: any) {
  const { params } = context;
  const username = `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`;
  const password = `${process.env.CLOUDINARY_API_SECRET}`;
  const credentials = `${username}:${password}`;
  const base64Credentials = Buffer.from(credentials).toString('base64');
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
  const data = await response.json();
  const video = data.resources.filter(
    (item: any) => params.videoId === item.asset_id?.toString()
  );
  return NextResponse.json({
    video,
  });
}
