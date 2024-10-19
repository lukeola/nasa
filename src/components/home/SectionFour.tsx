'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const SectionFour = () => {
  const [arrowDisable, setArrowDisable] = useState(true);

  const elementRef = useRef(null);
  const handleHorizantalScroll = (
    element: any,
    speed: any,
    distance: any,
    step: any
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <div className='w-full '>
      <div className='w-full pt-10 pb-10 justify-center gap-5 relative pl-[5%]'>
        <div
          className='flex gap-8 w-full overflow-x-scroll py-8'
          ref={elementRef}
          id='newsContainer'
        >
          {data.map((item: any) => (
            <div
              key={item.id}
              className='relative w-[350px] min-w-[350px] h-96 flex gap-8'
            >
              <div className='w-full h-full'>
                <Image
                  src={item.image}
                  alt='Post Image'
                  width={500}
                  height={500}
                  className='h-full w-full object-contain rounded-md'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

const data = [
  {
    id: 1,
    image: '/nasa1.jpg',
  },
  {
    id: 2,
    image: '/nasa2.jpg',
  },
  {
    id: 3,
    image: '/nasa3.jpg',
  },
  {
    id: 4,
    image: '/nasa4.jpg',
  },
  {
    id: 5,
    image: '/nasa5.jpg',
  },
  {
    id: 6,
    image: '/nasa6.jpg',
  },
];
