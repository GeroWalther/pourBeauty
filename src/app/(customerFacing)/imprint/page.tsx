import React from 'react';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';
import { PRIMARYBUTTONCOLOR } from '../../../../consts';

export default function Imprint() {
  return (
    <MaxWidthWrapper className='mt-12 mb-20'>
      <div className='bg-black text-white p-12'>
        <h1 className='font-light tracking-wide text-3xl md:text-4xl text-center mb-12'>
          IMPRESSUM
        </h1>

        <div className='max-w-4xl mx-auto'>
          <div className='space-y-4 mb-16'>
            <p className='text-lg font-light'>Angaben gemäß § 5 TMG</p>
            <p className='text-gray-400'>Schaller Cosmetic Group</p>
            <p className='text-gray-400'>Umsatzsteuer-ID DE363514924</p>
            <p className='text-gray-400'>Tatjana Schaller</p>
            <p className='text-gray-400'>An der Leiten 38</p>
            <p className='text-gray-400'>91177 Thalmässing</p>
            <p className='text-gray-400'>Deutschland</p>
            <p className='text-gray-400'>Tel: +49 91736699940</p>
            <p className='text-gray-400'>
              E-Mail:{' '}
              <a
                href='mailto:info@missglowbeauty.com'
                className='text-white hover:text-amber-200 transition-colors'>
                info@missglowbeauty.com
              </a>
            </p>
          </div>

          <div className='mt-16 space-y-12'>
            <div className='border-t border-gray-800 pt-8'>
              <h2 className='text-xl font-light tracking-wide mb-4'>
                STREITSCHLICHTUNG
              </h2>
              <p className='text-gray-300 font-light leading-relaxed'>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href='https://ec.europa.eu/consumers/odr'
                  className='text-white hover:text-amber-200 transition-colors ml-1'>
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
                nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className='border-t border-gray-800 pt-8'>
              <h2 className='text-xl font-light tracking-wide mb-4'>
                HAFTUNG FÜR INHALTE
              </h2>
              <p className='text-gray-300 font-light leading-relaxed'>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className='text-gray-300 font-light leading-relaxed mt-4'>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className='border-t border-gray-800 pt-8'>
              <h2 className='text-xl font-light tracking-wide mb-4'>
                HAFTUNG FÜR LINKS
              </h2>
              <p className='text-gray-300 font-light leading-relaxed'>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p className='text-gray-300 font-light leading-relaxed mt-4'>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>

            <div className='border-t border-gray-800 pt-8'>
              <h2 className='text-xl font-light tracking-wide mb-4'>
                URHEBERRECHT
              </h2>
              <p className='text-gray-300 font-light leading-relaxed'>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className='text-gray-300 font-light leading-relaxed mt-4'>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
