'use client';
import React from 'react';
import InnerHero from '../InnerHero';
import Image from 'next/image';

const Pictures = () => {
  return (
    <div>
      <InnerHero page='PICTURES' />
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-4xl font-bold py-12'>Photo Gallery</h1>
        <div className='w-full flex flex-wrap gap-8 justify-center pb-10 px-[5%]'>
          {data.map((item: any) => (
            <div
              className={`w-full md:w-[30%] ${
                item.id >= 12 && item.id <= 16
                  ? 'aspect-[1/1.7]'
                  : 'aspect-[1/1.2]'
              } object-cover rounded-lg`}
              key={item.id}
            >
              <Image
                src={item.image}
                alt=''
                height={500}
                width={500}
                className='w-full h-full rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pictures;

const data = [
  {
    id: 1,
    image: '/nasacrown1.jpg',
  },
  {
    id: 2,
    image: '/nasacrown2.jpg',
  },
  {
    id: 3,
    image: '/nasacrown3.jpg',
  },
  {
    id: 4,
    image: '/nasacrown4.jpg',
  },
  {
    id: 5,
    image: '/nasacrown5.jpg',
  },
  {
    id: 6,
    image: '/nasacrown6.jpg',
  },
  {
    id: 7,
    image: '/nasacrown7.jpg',
  },
  {
    id: 8,
    image: '/nasacrown8.jpg',
  },
  {
    id: 9,
    image: '/nasacrown9.jpg',
  },
  {
    id: 10,
    image: '/nasacrown10.jpg',
  },
  {
    id: 11,
    image: '/nasacrown11.jpg',
  },
  {
    id: 12,
    image: '/nasa1.jpg',
  },
  {
    id: 13,
    image: '/nasa2.jpg',
  },
  {
    id: 14,
    image: '/nasa3.jpg',
  },
  {
    id: 15,
    image: '/nasa4.jpg',
  },
  {
    id: 16,
    image: '/nasa5.jpg',
  },
  {
    id: 17,
    image: '/nasa6.jpg',
  },
];
