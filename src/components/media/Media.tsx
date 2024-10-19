import React from 'react';
import InnerHero from '../InnerHero';
import Image from 'next/image';
import Link from 'next/link';

const Media = () => {
  return (
    <div>
      <InnerHero page='Media' />
      <div className='w-full flex flex-col items-center gap-8 md:items-start md:flex-row justify-center py-12'>
        <Link
          href='/media/videos'
          className='w-full md:w-1/2 aspect-[2.5/1] flex flex-col items-center gap-5 '
        >
          <div className='w-2/5 h-full object-cover bg-gray-700'>
            <Image
              src='/nasacrown-videos.png'
              alt='videos'
              width={500}
              height={500}
              className='w-full h-full'
            />
          </div>
          <p className='text-xl'>Videos</p>
        </Link>
        <Link
          href='/media/pictures'
          className='w-full md:w-1/2 aspect-[2.5/1] flex flex-col items-center gap-5 '
        >
          <div className='w-2/5 h-full object-cover bg-gray-700 '>
            <Image
              src='/nasacrown-pictures.png'
              alt='pictures'
              width={500}
              height={500}
              className='w-full h-full'
            />
          </div>
          <p className='text-xl'>Pictures</p>
        </Link>
      </div>
    </div>
  );
};

export default Media;
