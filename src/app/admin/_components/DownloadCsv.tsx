'use client';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { CSVLink } from 'react-csv';

interface DownloadCsvProps {
  email: string[];
  newsletter?: boolean;
}

const DownloadCsv: FC<DownloadCsvProps> = ({ email, newsletter = false }) => {
  const csvData = [['Email'], ...email.map((e) => [e])];

  return (
    <div className='p-4 mb-'>
      <h3 className='mb-5'>
        {newsletter
          ? 'Downloade die Newsletter E-Mail Liste'
          : 'Downloade alle Emails der Kunden, die schon einmal bestellt haben.'}
      </h3>
      <CSVLink
        data={csvData}
        target='_blank'
        filename={
          newsletter
            ? 'MissGlow_Newsletter_Emails.csv'
            : 'MissGlow_Kunden-Emails.csv'
        }>
        <Button>Download</Button>
      </CSVLink>
    </div>
  );
};

export default DownloadCsv;
