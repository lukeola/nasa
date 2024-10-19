'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='w-full  h-20 md:h-auto flex flex-col fixed  z-50 top-0'>
      <div className=' w-full flex justify-between border-b border-gray-300 relative h-20 bg-white'>
        <Link
          href='/'
          className='w-1/5 md:w-[10%] max-w-20 aspect-[1/1] ml-[5%]'
        >
          <Image
            src='/logo.png'
            alt='logo'
            width={300}
            height={300}
            className='h-full w-full'
          />
        </Link>
        <div className='w-3/5 flex invisible md:visible'>
          <div className='w-[50%] items-center h-full flex '>
            <div className='items-center h-full flex'>
              <IoIosPhonePortrait
                style={{ fontSize: 'clamp(30px,2vw,40px)', color: '#2E82EA' }}
              />
            </div>
            <div
              className='flex flex-col'
              style={{ fontSize: 'clamp(10px,2vw,16px)' }}
            >
              <span>+4915219288659</span>
              <span>+2349028180990</span>
            </div>
          </div>
          <div className='w-[50%] flex h-full items-center'>
            <div className='items-center h-full flex'>
              <MdLocationPin
                style={{ fontSize: 'clamp(30px,2vw,40px)', color: '#2E82EA' }}
              />
            </div>
            <div
              className='flex flex-col'
              style={{ fontSize: 'clamp(10px,2vw,16px)' }}
            >
              <span>20 Uko street by 101 Porthacourt</span>
              <span>road Aba,Abia state,Nigeria</span>
            </div>
          </div>
        </div>
        <div
          className='visible md:invisible text-2xl absolute flex items-center h-full right-[3%]'
          onClick={() => setMenu(!menu)}
        >
          {menu ? <MdClose /> : <MdMenu />}
        </div>
      </div>
      <div
        className={` h-auto py-10 md:py-0 md:h-12  flex md:items-center w-full px-[5%]  md:relative top-20 md:top-0 z-20 md:bg-white bg-black opacity-90 md:opacity-95 ${
          menu ? 'visible ' : 'invisible md:visible'
        }`}
      >
        <div
          className='w-[50%] flex md:gap-[2%]  flex-col gap-5 md:flex-row mt-8 md:mt-0  text-white md:text-black'
          onClick={() => setMenu(false)}
        >
          <Link href='/'>HOME</Link>
          <Link href='/products'>PRODUCTS</Link>
          <Link href='/contact'>CONTACT</Link>
          <Link href='/about'>ABOUT US</Link>
          <Link href='/faq'>FAQ</Link>
          <Link href='/media'>MEDIA</Link>
        </div>
        <div className='w-[50%] flex gap-[3%] invisible md:visible'>
          <Link
            href='https://web.facebook.com/p/Nasacrown-Mega-Trust-Limited-100075663285420/?locale=eu_ES&paipv=0&eav=AfZT5PM9jgSJD9zsljj5bKzD48wXR2K1_cpscBPaRGmwVk30TH_B9BioXi0QSPtKRvc&_rdc=1&_rdr/'
            className='border border-gray-500  w-[4%] aspect-[1/1] items-center justify-center flex'
            target='_blank'
          >
            <FaFacebook
              style={{ fontSize: 'clamp(20px,1.5vw,25px)', color: '#2C3137' }}
            />
          </Link>
          <Link
            href='https://www.tiktok.com/@nasacrown4/'
            className='border border-gray-500  w-[4%] aspect-[1/1] items-center justify-center flex'
            target='_blank'
          >
            <FaTiktok
              style={{ fontSize: 'clamp(20px,1.5vw,25px)', color: '#2C3137' }}
            />
          </Link>
          <Link
            href='https://www.instagram.com/nasacrown_mega_trust_limited'
            className='border border-gray-500  w-[4%] aspect-[1/1] items-center justify-center flex'
            target='_blank'
          >
            <FaSquareInstagram
              style={{ fontSize: 'clamp(20px,1.5vw,25px)', color: '#2C3137' }}
            />
          </Link>
          <Link
            href='https://www.youtube.com/@nasacrown5708'
            className='border border-gray-500  w-[4%] aspect-[1/1] items-center justify-center flex'
            target='_blank'
          >
            <FaYoutube
              style={{ fontSize: 'clamp(20px,1.5vw,25px)', color: '#2C3137' }}
            />
          </Link>

          <div className='ml-10 flex gap-5'>
            <HiOutlineMailOpen
              style={{ fontSize: 'clamp(20px,1.5vw,25px)', color: '#2C3137' }}
            />
            <span>f.uchendu@yahoo.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
