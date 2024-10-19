import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Adult = () => {
  return (
    <div className='w-full flex flex-col items-center bg-gray-300 mt-32 py-8 gap-8'>
      <div className='w-4/5 bg-white flex flex-col gap-4 items-center py-10 px-[5%]'>
        <div>
          <Image src='/nasacrown-adult.jpg' alt='' width={500} height={500} />
        </div>
        <div>
          <h1 className='font-bold text-2xl my-5'>Nasa Aro Adult Dog Food</h1>
          <div>
            <p>
              Nasa Aro dogfood is a balanced and easily digestible complete
              food, ideal for both Adult and Puppy dog&apos;s complete menu for
              their daily nutrition. Your dog is like a friend, he is active and
              loves exercise. You can enjoy outdoor activities together with
              him, regardless of the weather! In order to do justice to your
              dog&apos;s natural vitality, you need a food that gives him
              strength and supports his natural fitness, NASA Aro is the best
              for your dog.
            </p>
            <h2 className='font-bold text-xl my-5'>
              Our values are quality, reliability, best & more.
            </h2>
            <ul className='flex flex-col gap-3'>
              <li>
                Nasa Aro offers quality adult Pet food of 410gm and Quality
                control supplies
              </li>
              <li>
                Pet owners are increasingly aware of the impact of nutrition and
                longevity of their pets
              </li>
              <li>
                The production process is extremely hygienic and efficiently
                organised, and the products are labelled & packaged well.
              </li>
              <li>Nasa Aro dogfood focused on quality.</li>
              <li>
                NASA Aro dogfood is the best adult food in the form of
                high-quality meat chunks in gravy.
              </li>
              <li>
                NASA Aro dogfood used real meat as a major ingredient, the
                company&apos;s products meet the highest European standards .
              </li>
            </ul>
            <div className='font-semibold py-4'>
              Note: The Nasa Aro dogfood net weight is 410gm in each tin or cans
            </div>
          </div>
        </div>
      </div>
      <div className='w-4/5 flex justify-end'>
        <Link href='/products/puppy' className='text-lg text-blue-900'>
          Next post
        </Link>
      </div>
    </div>
  );
};

export default Adult;
