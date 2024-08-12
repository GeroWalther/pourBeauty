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
          msg: '',
          error: 'Name ist erforderlich.',
          code: 1,
        },
        { status: 400 }
      );
    }
    try {
      await db.newsletter.create({
        data: {
          email,
          name,
          subscribedAt: new Date(),
        },
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { msg: '', error: 'Schon eingeschrieben! Already subscribed!' },
        { status: 400 }
      );
    }

    //email to subscriber
    await resend.emails.send({
      from: `Newsletter <${process.env.SENDER_EMAIL}>`,
      to: email.toString().trim() as string,
      subject: 'Hier is dein Gutscheincode!',
      react: <Subscribed name={name} />,
    });

    return NextResponse.json(
      {
        error: '',
        msg: 'Erfolgreich eingeschrieben!🎉 Wir haben dir eine Email mit deinem Rabattcode gesendet!',
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
