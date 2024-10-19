'use client';

import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import InnerHero from '../InnerHero';
import { FaInfoCircle } from 'react-icons/fa';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <InnerHero page='FAQ' />
      <div className='px-[5%]'>
        <h1 className=' text-3xl font-bold  p-12 flex justify-center'>
          Frequently Asked Questions
        </h1>
        <div className='max-w-3xl mx-auto py-8'>
          {data.map((faq, index) => (
            <div
              key={index}
              className='mb-4 border rounded-sm p-4 bg-white shadow'
              data-aos='fade-up'
            >
              <div className='cursor-pointer' onClick={() => toggleFAQ(index)}>
                <h2 className='text-lg font-medium'>{faq.question}</h2>
              </div>
              {activeIndex === index && (
                <p className='mt-4 text-gray-700'>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className='w-full flex flex-col items-center px-[10%] gap-5'>
          <div className='text-gray-700 text-4xl'>
            <FaInfoCircle />
          </div>
          <h1 className='font-semibold text-2xl'>Note!</h1>
          <p className='md:w-3/5 pb-8'>
            Payment should be made in Nasacrown Mega Trust Limited account.
            After goods are sold out we do not accept responsibility for damage
            goods after a customer confirm the goods are received in a good
            condition. We do not sale on credit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;

const data = [
  {
    question: 'Is NASA Aro Puppy Petfood good for puppy dogs?',
    answer:
      'Yes, Nasa Aro Puppy is the best petfood for your young puppies, it contain enough protein needed for puppy’s growth.',
  },
  {
    question: 'can adult dog eat nasa aro puppy?',
    answer:
      'Yes, that’s still very good because it contains all the nutrition adult dog need and more.',
  },
  {
    question:
      'How many times in a day can I feed my dog with nasa aro puppy or adult food?',
    answer:
      'We recommend that,  you read the information on  menu feeding table that is on each label on the can.',
  },
  {
    question: 'can nasa aro be used as complete meal for adult puppy?',
    answer:
      'Yes, Nasa Aro meat chunks in gravy in a broad range of flavors and for distinctive life stages. Nasa Aro canned food is a healthy, complete meal prepared with delicious meat and the best ingredients. It provides your dog with all the nutrients, vitamins and trace elements needed to enjoy an adventurous life',
  },
  {
    question: 'how good is the quality?',
    answer:
      'When producing Nasa Aro dogfood the company is focused on quality,  Nasa Aro  contains high-quality meat chunks in gravy.',
  },
];
