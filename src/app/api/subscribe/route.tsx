import Subscribed from '@/email/Subscribed';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
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

    // email to subscriber
    await resend.emails.send({
      from: `Newsletter <${process.env.SENDER_EMAIL}>`,
      to: process.env.SHOP_EMAIL as string,
      subject: 'Hier is Ihr Gutscheincode!',
      react: <Subscribed name={name} />,
    });

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
