'use client';
import React from 'react';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  return (
    <MaxWidthWrapper className='mt-12 mb-20'>
      <div className='bg-black text-white p-12'>
        <h1 className='font-light tracking-wide text-3xl md:text-4xl text-center mb-12'>
          {language === 'de'
            ? 'DATENSCHUTZ AUF EINEN BLICK'
            : 'DATA PROTECTION AT A GLANCE'}
        </h1>

        <div className='max-w-4xl mx-auto'>
          <div className='mb-16'>
            <h2 className='text-xl font-light tracking-wide mb-4'>
              {language === 'de'
                ? 'ALLGEMEINE HINWEISE'
                : 'GENERAL INFORMATION'}
            </h2>
            <p className='text-gray-300 font-light leading-relaxed'>
              {language === 'de'
                ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.'
                : 'The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is all data with which you can be personally identified. You can find detailed information on the subject of data protection in our data protection declaration listed under this text.'}
            </p>
          </div>

          <div className='border-t border-gray-800 pt-8 mb-16'>
            <h2 className='text-xl font-light tracking-wide mb-6'>
              {language === 'de'
                ? 'DATENERFASSUNG AUF UNSERER WEBSITE'
                : 'DATA COLLECTION ON OUR WEBSITE'}
            </h2>
            <p className='text-gray-300 font-light leading-relaxed'>
              <span className='text-white font-medium'>
                {language === 'de'
                  ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?'
                  : 'Who is responsible for data collection on this website?'}
              </span>
              <br />
              {language === 'de'
                ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.'
                : 'The data processing on this website is carried out by the website operator. You can find his contact details in the imprint of this website.'}
            </p>
            <p className='text-gray-300 font-light leading-relaxed mt-6'>
              <span className='text-white font-medium'>
                {language === 'de'
                  ? 'Wie erfassen wir Ihre Daten?'
                  : 'How do we collect your data?'}
              </span>
              <br />
              {language === 'de'
                ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.'
                : 'On the one hand, your data is collected when you communicate it to us. This may, for example, be data that you enter in a contact form.'}
            </p>
            <p className='text-gray-300 font-light leading-relaxed mt-2'>
              {language === 'de'
                ? 'Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.'
                : 'Other data is automatically recorded by our IT systems when you visit the website. This is primarily technical data (e.g. Internet browser, operating system or time of page access). This data is recorded automatically as soon as you enter our website.'}
            </p>
            <p className='text-gray-300 font-light leading-relaxed mt-6'>
              <span className='text-white font-medium'>
                {language === 'de'
                  ? 'Wofür nutzen wir Ihre Daten?'
                  : 'What do we use your data for?'}
              </span>
              <br />
              {language === 'de'
                ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.'
                : 'Some of the data is collected to ensure that the website is provided without errors. Other data can be used to analyze your user behavior.'}
            </p>
          </div>

          <div className='border-t border-gray-800 pt-8 mb-16'>
            <h2 className='text-xl font-light tracking-wide mb-6'>
              {language === 'de'
                ? 'ANALYSE-TOOLS UND TOOLS VON DRITTANBIETERN'
                : 'ANALYSIS TOOLS AND THIRD-PARTY TOOLS'}
            </h2>
            <p className='text-gray-300 font-light leading-relaxed'>
              {language === 'de'
                ? 'Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung.'
                : 'When you visit our website, your surfing behavior can be statistically evaluated. This is done primarily with cookies and so-called analysis programs. The analysis of your surfing behavior is usually anonymous; the surfing behavior cannot be traced back to you. You can object to this analysis or prevent it by not using certain tools. You can find detailed information about this in the following data protection declaration.'}
            </p>
            <p className='text-gray-300 font-light leading-relaxed mt-4'>
              {language === 'de'
                ? 'Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.'
                : 'You can object to this analysis. We will inform you about the options for objection in this privacy policy.'}
            </p>
          </div>

          <div className='border-t border-gray-800 pt-8'>
            <h2 className='text-xl font-light tracking-wide mb-6'>
              {language === 'de'
                ? 'ALLGEMEINE HINWEISE UND PFLICHTINFORMATIONEN'
                : 'GENERAL INFORMATION AND MANDATORY INFORMATION'}
            </h2>
            <p className='text-gray-300 font-light leading-relaxed'>
              <span className='text-white font-medium'>
                {language === 'de' ? 'Datenschutz' : 'Data protection'}
              </span>
              <br />
              {language === 'de'
                ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.'
                : 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.'}
            </p>
            <p className='text-gray-300 font-light leading-relaxed mt-4'>
              {language === 'de'
                ? 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.'
                : 'When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy statement explains what data we collect and what we use it for. It also explains how and for what purpose this is done.'}
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
