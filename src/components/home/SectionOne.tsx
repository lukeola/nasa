import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDog } from 'react-icons/fa';

const SectionOne = () => {
  return (
    <div className='flex flex-col md:flex-row '>
      <div className='w-full md:w-1/2 p-10 relative '>
        <div className='w-full md:w-[80%] bg-slate-600 rounded-xl'>
          <Image
            src='/nasacrown-puppy.jpg'
            alt=''
            width={500}
            height={500}
            className='object-cover h-full w-full rounded-xl'
          />
        </div>
        <div className='w-full md:w-[50%] mt-2 bg-blue-500 rounded-xl md:absolute top-32 right-10 p-8 flex flex-col md:flex-row gap-4 shadow-2xl'>
          <div className='h-full w-1/5'>
            <div className='bg-blue-300 bg-opacity-50 text-white text-xl rounded-full w-full md:w-[90%] aspect-[1/1] justify-center items-center flex'>
              <FaDog />
            </div>
          </div>
          <div className='text-white flex flex-col gap-4 w-full md:w-4/5'>
            <h2 className='font-bold text-xl'>Nasa Aro Puppy Food</h2>
            <p>
              NASA Aro puppy is the best also rich in nutrient that support your
              puppy & maintaining balance diet...
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2  flex flex-col justify-center gap-8 pl-[5%] md:pl-0 pr-[5%]'>
        <h1 className='text-4xl font-bold'>
          Why a special food for small puppies?
        </h1>
        <p className='text-lg text-gray-500'>
          The growth phase of your puppy is an important stage in life. It is
          the time of physical changes and new discoveries. While your puppy is
          still growing, it should be ensured that their diet is contributing to
          optimal health…
        </p>
        <Link
          href='/products/puppy'
          className='mt-8 border border-blue-500 rounded-lg w-[35%] md:w-[25%] flex justify-center items-center aspect-[3/1] font-semibold text-blue-500 hover:bg-blue-500 hover:text-white'
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
