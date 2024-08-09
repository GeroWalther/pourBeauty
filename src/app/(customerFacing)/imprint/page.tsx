import React from 'react';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';
import { Card } from '@/components/ui/card';

export default function Imprint() {
  return (
    <MaxWidthWrapper className='mb-10'>
      <div className='bg-gradient-to-r from-pink-400  via-pink-600 to-orange-400 p-10 rounded-lg shadow-2xl'>
        <h1 className='font-bold text-white text-center text-3xl mb-8'>
          Impressum
        </h1>
        <Card className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
          <div className='space-y-4'>
            <p className='text-gray-800 text-lg font-semibold'>
              Angaben gemäß § 5 TMG
            </p>
            <p className='text-gray-700'>Schaller Cosmetic Group</p>
            <p className='text-gray-700'>Umsatzsteuer-ID DE363514924</p>
            <p className='text-gray-700'>Tatjana Schaller</p>
            <p className='text-gray-700'>An der Leiten 38</p>
            <p className='text-gray-700'>91177 Thalmässing</p>
            <p className='text-gray-700'>Deutschland</p>
            <p className='text-gray-700'>Tel: +49 91736699940</p>
            <p className='text-gray-700'>
              E-Mail:{' '}
              <a
                href='mailto:info@missglowbeauty.com'
                className='text-blue-500 hover:text-blue-700'>
                info@missglowbeauty.com
              </a>
            </p>
          </div>
        </Card>
        <div className='mt-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-6'>
          <div>
            <h2 className='text-xl font-semibold text-gray-800'>
              Streitschlichtung
            </h2>
            <p className='text-gray-700'>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href='https://ec.europa.eu/consumers/odr'
                className='text-blue-500 hover:text-blue-700'>
                {' '}
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
              nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-semibold text-gray-800'>
              Haftung für Inhalte
            </h2>
            <p className='text-gray-700'>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className='text-gray-700'>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-semibold text-gray-800'>
              Haftung für Links
            </h2>
            <p className='text-gray-700'>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className='text-gray-700'>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-semibold text-gray-800'>
              Urheberrecht
            </h2>
            <p className='text-gray-700'>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p className='text-gray-700'>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
