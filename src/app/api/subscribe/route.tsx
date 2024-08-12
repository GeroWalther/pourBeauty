import db from '@/db';
import { NextRequest, NextResponse } from 'next/server';

import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
import Subscribed from '@/email/Subscribed';

export async function POST(
  req: NextRequest
): Promise<NextResponse | undefined> {
  try {
    const body = await req.json();
    const { email, name, emailIsValid } = body;
    // console.log('EMAIL:', email, 'NAME:', name, 'EMAILISVALID:', emailIsValid);
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

    await db.newsletter.create({
      data: {
        email,
        name,
        subscribedAt: new Date(),
      },
    });

    //email to subscriber
    await resend.emails.send({
      from: `Newsletter <${process.env.SENDER_EMAIL}>`,
      to: email.toString().trim(),
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
