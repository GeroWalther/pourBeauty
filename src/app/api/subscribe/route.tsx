import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest
): Promise<NextResponse | undefined> {
  try {
    const body = await req.json();
    const { email, name, emailIsValid } = body;
    console.log('EMAIL:', email, 'NAME:', name, 'EMAILISVALID:', emailIsValid);

    if (!email || !emailIsValid) {
      return NextResponse.json(
        {
          error:
            'E-Mail ist erforderlich und muss mit der bestätigten E-Mail übereinstimmen.',

          code: 0,
        },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json(
        {
          error: 'Name ist erforderlich.',
          code: 1,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: '',
        code: 2,
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
