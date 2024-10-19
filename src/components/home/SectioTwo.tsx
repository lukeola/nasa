import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDog } from 'react-icons/fa';

const SectionTwo = () => {
  return (
    <div className='flex flex-col md:flex-row mt-5'>
      <div className='w-full md:w-1/2  flex flex-col justify-center gap-8 px-[5%]'>
        <h1 className='text-4xl font-bold'>Nasa Aro Adult Dog Food</h1>
        <p className='text-lg text-gray-500'>
          Nasa Aro dogfood is a balanced and easily digestible complete food,
          ideal for both Adult and Puppy dog&apos;s complete menu for their
          daily nutrition. Your dog is like a friend, he is active and loves
          exercise. You can enjoy outdoor activities together with him,
          regardless of the weather! In order to do justice to your dog&apos;s
          natural vitality, you need a food that gives him strength and supports
          his natural fitness, NASA Aro is the best for your dog.
        </p>
        <Link
          href='/products/adult'
          className='mt-8 border border-blue-500 rounded-lg w-[35%] md:w-[25%] flex justify-center items-center aspect-[3/1] font-semibold text-blue-500 hover:bg-blue-500 hover:text-white'
        >
          Explore
        </Link>
      </div>
      <div className='w-full md:w-1/2 p-10 relative'>
        <div className='w-full md:w-[80%] bg-slate-600 rounded-xl'>
          <Image
            src='/nasacrown-adult.jpg'
            alt=''
            width={500}
            height={500}
            className='object-cover h-full w-full rounded-xl'
          />
        </div>
        <div className='w-full md:w-[60%]  bg-blue-500 rounded-xl md:absolute bottom-20 mt-2 -left-10 p-8 flex flex-col md:flex-row gap-4 shadow-2xl'>
          <div className='h-full w-1/5'>
            <div className='bg-blue-300 bg-opacity-50 text-white text-xl rounded-full w-full md:w-[90%] aspect-[1/1] justify-center items-center flex'>
              <FaDog />
            </div>
          </div>
          <div className='text-white flex flex-col gap-4 w-full md:w-4/5'>
            <h2 className='font-bold text-xl'>Nasa Aro Adult Dog Food</h2>
            <p>
              Nasa Aro dogfood is a balanced and easily digestible complete food
              and ideal for your adult dog&aps;s daily nutrition. Your dog is
              like a friend , He is active and loves exercise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
