'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    imageUrl: '/nasacrown-puppy.jpg',
    header: 'Nasa Aro Puppy Food',
    text: 'The growth phase of your puppy is an important stage in life. It is the time of physical changes and new discoveries.',
  },
  {
    id: 2,
    imageUrl: '/nasacrown-adult.jpg',
    header: 'Nasa Aro Adult Food',
    text: 'Nasa Aro dogfood is a balanced and easily digestible complete food and ideal for your adult dog’s daily nutrition.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next image
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); // Change slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  return (
    <section className='bg-blue-200 flex text-white  w-full aspect-[1.7/1] justify-center items-center mt-20'>
      <div className=' w-[95%] sm:w-[80%] relative z-10 flex justify-center items-center'>
        <div className='absolute w-full rounded-[.5rem] flex overflow-hidden shadow-2xl'>
          <video
            className='w-full h-full object-cover flex'
            autoPlay
            loop
            muted
          >
            {/* Update the source with your video file or URL */}
            <source src='https://lukeshubstorage.blob.core.windows.net/teleconnect/teleconnectbg.mp4' />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='w-full flex flex-col absolute aspect-[1/.562] rounded-[.5rem] bg-[rgba(16,41,110, 0.7)] justify-center overflow-hidden z-20 shadow-[rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset]'>
          <div className='items-center justify-center w-full h-[90%] flex'>
            <button
              onClick={goToPreviousSlide}
              className='text-[2vw] opacity-20'
            >
              <IoIosArrowBack />
            </button>

            <div className='relative w-full h-full justify-center flex'>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${
                    index === currentSlide
                      ? 'absolute justify-between top-0 w-[95%] flex h-full transition-opacity duration-500 opacity-100'
                      : 'absolute justify-between top-0 w-[95%] flex h-full transition-opacity duration-[800ms] opacity-0'
                  }`}
                >
                  <div className='w-[60%] flex flex-col gap-[5%] justify-center'>
                    <h1 className='w-full text-white text-[3vw] sm:text-[2vw] font-[500] text-start uppercase flex'>
                      {slide.header}
                    </h1>
                    <p className='text-white text-[2vw] sm:text-[1vw] text-start'>
                      {slide.text}
                    </p>
                    <Link
                      href='/contact'
                      className='w-[35%] sm:w-[20%] aspect-[3/1] flex justify-center items-center rounded-[4px] bg-white text-[#0C225C] text-[2vw] sm:text-[1vw] font-[500]'
                    >
                      Contact us
                    </Link>
                  </div>
                  <Image
                    src={slide.imageUrl}
                    alt={`Image ${index + 1}`}
                    className='w-[38%] sm:w-[40%] object-cover rounded-[2rem] '
                    width={1000}
                    height={1000}
                  />
                </div>
              ))}
            </div>
            <button onClick={goToNextSlide} className='text-[2vw] opacity-20'>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
