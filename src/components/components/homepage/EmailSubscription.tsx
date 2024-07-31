'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

function Subscribe() {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const inputElRep = useRef<HTMLInputElement | null>(null);
  const inputName = useRef<HTMLInputElement | null>(null);

  const emailIsTheSame = (email: string, repeatEmail: string) => {
    if (email !== repeatEmail) {
      return false;
    } else {
      return true;
    }
  };

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailIsValid = emailIsTheSame(
      (inputEl.current?.value ?? '') as string,
      (inputElRep.current?.value ?? '') as string
    );
    try {
      //Send a request to our API with the user's email address.
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputEl.current?.value,
          name: inputName.current?.value,
          emailIsValid,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const { msg, error } = await res.json();
      if (error) {
        toast.error(error);
      }

      //  Clear the input value and show a success message.
      if (inputEl.current) {
        inputEl.current.value = '';
      }
      if (inputElRep.current) {
        inputElRep.current.value = '';
      }
      if (inputName.current) {
        inputName.current.value = '';
      }
      toast.success(
        'Erfolgreich eingeschrieben!🎉 Wir haben dir eine Email mit deinem Rabattcode gesendet!'
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <form onSubmit={subscribe} className='bg-orange-400 p-8'>
          <div className="relative bg-cover bg-center bg-no-repeat rounded-md shadow-lg bg-[linear-gradient(100deg,rgba(255,105,180,0.9)_0%,rgba(255,105,180,0.9)_100%,transparent_50%),url('/newsletter.webp')] md:bg-[linear-gradient(100deg,rgba(255,105,180,0.9)_0%,rgba(255,105,180,0.9)_60%,transparent_60%),url('/newsletter.webp')]">
            <div className='w-full md:w-1/2 p-4 md:p-10'>
              <h3 className='text-center text-pink-100 mb-4 mt-0 text-2xl font-semibold'>
                Newsletter
              </h3>
              <p className='mb-2 text-base text-pink-100 font-semibold'>
                Genießen Sie 15 % Rabatt auf Ihre erste Bestellung UND ERFAHREN
                SIE ALS ERSTER:
              </p>
              <ul className='mb-6 text-base text-pink-100 font-semibold'>
                <li>- Einführung neuer Produkte</li>
                <li>- bevorstehende Live-Events</li>
                <li>- Fachkundige Beratung</li>
                <li>- Kundenkarte genießen und mit Rabatt einkaufen</li>
              </ul>
              <div className='mb-4'>
                <input
                  className='text-base font-inherit text-inherit p-3 rounded border-0 border-b-3 border-transparent bg-white bg-opacity-75 w-full block transition-all duration-300 focus:outline-none focus:shadow-lg focus:border-green-500'
                  id='email-input'
                  name='email'
                  placeholder='E-Mail'
                  ref={inputEl}
                  required
                  type='email'
                />
                <label
                  htmlFor='email-input'
                  className='block mt-2 text-base font-bold ml-4 transition-all duration-300 text-pink-100'>
                  {'E-Mail'}
                </label>
              </div>
              <div className='mb-4'>
                <input
                  className='text-base font-inherit text-inherit p-3 rounded border-0 border-b-3 border-transparent bg-white bg-opacity-75 w-full block transition-all duration-300 focus:outline-none focus:shadow-lg focus:border-green-500'
                  id='email-repeat'
                  name='email-rp'
                  placeholder='E-Mail wiederholen'
                  ref={inputElRep}
                  required
                  type='email'
                />
                <label
                  htmlFor='email-repeat'
                  className='block mt-2 text-base font-bold ml-4 transition-all duration-300 text-pink-100'>
                  {'E-Mail wiederholen'}
                </label>
              </div>
              <div className='mb-4'>
                <input
                  className='text-base font-inherit text-inherit p-3 rounded border-0 border-b-3 border-transparent bg-white bg-opacity-75 w-full block transition-all duration-300 focus:outline-none focus:shadow-lg focus:border-green-500'
                  id='Name-input'
                  name='name'
                  placeholder='Name'
                  ref={inputName}
                  required
                  type='text'
                />
                <label
                  htmlFor='Name-input'
                  className='block mt-2 text-base font-bold ml-4 transition-all duration-300 text-pink-100'>
                  {'Name'}
                </label>
              </div>
              <div className='mt-4 mb-8 text-pink-100 text-sm'>
                <p>
                  *Kein Spam. Durch Klicken auf &quot; Einschreiben &quot;
                  erklären Sie sich mit den Datenschutzbestimmungen,
                  Haftungsausschlüssen und Nutzungsbedingungen von Miss Glow
                  Beauty einverstanden und gelesen haben.
                </p>
              </div>
              <Button type='submit' className='bg-pink-600 w-full md:w-96'>
                Einschreiben
              </Button>
            </div>
          </div>
        </form>
        {/* {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )} */}
      </section>
    </>
  );
}

export default Subscribe;

// <section>
//   <form onSubmit={subscribe} className={classes.bg}>
//     <div className={classes.bgpic}>
//       <div className={classes.form}>
//         <h3 className={classes.h3}>Newsletter</h3>
//         <p className={classes.p}>
//           Schreibe dich in unsere Newsletter ein um auf dem laufendem zu
//           bleiben.
//           <br />
//           Wir werden Sie per E-Mail benachrichtigen, sobald ein neues
//           Produkt veröffentlicht wird oder wir Rabatt-Aktionen haben.
//         </p>
//         <div className={classes.group}>
//           <input
//             className={classes.input}
//             id='email-input'
//             name='email'
//             placeholder='E-Mail'
//             ref={inputEl}
//             required
//             type='email'
//           />
//           <label htmlFor='email-input' className={classes.label}>
//             {'E-Mail'}
//           </label>
//         </div>

//         <div className={classes.group}>
//           <input
//             className={classes.input}
//             id='email-repeat'
//             name='email-rp'
//             placeholder='E-Mail wiederholen'
//             ref={inputElRep}
//             required
//             type='email'
//           />
//           <label htmlFor='email-repeat' className={classes.label}>
//             {'E-Mail wiederholen'}
//           </label>
//         </div>

//         <div className={classes.group}>
//           <input
//             className={classes.input}
//             id='fName-input'
//             name='name'
//             placeholder='Vorname'
//             ref={inputFName}
//             required
//             type='text'
//           />
//           <label htmlFor='fName-input' className={classes.label}>
//             {'Vorname'}
//           </label>
//         </div>
//         <div className={classes.group}>
//           <input
//             className={classes.input}
//             id='lName-input'
//             name='lastName'
//             placeholder='Nachname'
//             ref={inputLName}
//             required
//             type='text'
//           />
//           <label htmlFor='lName-input' className={classes.label}>
//             {'Nachname'}
//           </label>
//         </div>

//         <div className={classes.message}>
//           {message
//             ? message
//             : `Wir senden Ihnen nur eine E-Mail, wenn der Blog aktualisiert wird. Kein Spam. Durch Klicken auf die Registrierungsschaltfläche erklären Sie sich mit den Datenschutzbestimmungen, Haftungsausschlüssen und Nutzungsbedingungen von Miss Glow Beauty einverstanden.`}
//         </div>
//         <Button type='submit' variant={'ghost'}>
//           {'Einschreiben'}
//         </Button>
//       </div>
//     </div>
//   </form>
//   {notification && (
//     <Notification
//       status={notification.status}
//       title={notification.title}
//       message={notification.message}
//     />
//   )}
// </section>
