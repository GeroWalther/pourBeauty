'use client';

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';

type qtype = {
  questions: {
    id: number;
    question: string;
    answer: string;
  }[];
};

function FAQComponent({ questions }: qtype) {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <div id='faq' className='w-full py-4 mb-10'>
      <div className='bg-stone-50 px-4 py-6 rounded-lg shadow-md w-[89%] max-w-[1400px] m-auto'>
        <h2 className='text-xl mb-6 font-extralight text-dark'>
          Häufig gestellte Fragen
        </h2>

        {questions.map((q) => (
          <div key={q.id} className='mb-5 last:mb-0'>
            <button
              className='faq-question w-full text-left text-base focus:outline-none p-4 bg-white rounded-lg shadow-sm flex justify-between items-center text-dark'
              onClick={() =>
                setActiveQuestion((a) => (a === q.id ? null : q.id))
              }>
              {q.question}
              {activeQuestion === q.id ? (
                <PlusIcon size={18} />
              ) : (
                <MinusIcon size={18} />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: 'circIn' }}
                  className='mt-2 text-primary ml-4 text-sm'>
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQComponent;
