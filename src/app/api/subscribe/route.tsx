import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest
): Promise<NextResponse | undefined> {
  try {
    const body = await req.json();
    const { email, name, emailIsValid } = body;

    if (!email || !emailIsValid || !name) {
      return NextResponse.json(
        {
          error: 'Email is required and must match the confirmed email.',
          code: 0,
        },
        { status: 400 }
      );
    }

    console.log('success', email, name, emailIsValid);
    return NextResponse.json(
      {
        error: '',
        code: 1,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: 'Failed to subscribe',
      },
      { status: 500 }
    );
  }
}
