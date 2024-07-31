'use server';
import db from '@/db';

const getEmailsOfOrderedCustomers = async () => {
  const emails = await db.order.findMany({
    select: {
      email: true,
    },
  });

  if (!emails || emails.length === 0) {
    return [];
  }

  const filteredEmails = emails
    .map((email) => email.email)
    .filter((email) => email !== null)
    .filter((email, index, self) => self.indexOf(email) === index);

  return filteredEmails;
};

const getEmailsNewsletter = async () => {
  const emails = await db.newsletter.findMany({
    select: {
      email: true,
      name: true,
    },
  });

  if (!emails || emails.length === 0) {
    return [];
  }

  return emails;
};

export { getEmailsOfOrderedCustomers, getEmailsNewsletter };
