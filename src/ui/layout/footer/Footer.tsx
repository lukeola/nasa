import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

import { FaSquareInstagram } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <div className='bg-[#2C3137] p-[4%] flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-5 '>
        <div className='w-full md:w-1/4 flex flex-col gap-5'>
          <h1 className='font-bold text-white text-2xl'>About us</h1>
          <p className='text-white'>
            Nasacrown Mega Trust Limited, is a registered business in Nigeria.
            Our company mission and goals is to dominate the market and fast
            leading force in business such as, introducing the best quality
            dogfood in Nigeria market
          </p>
          <div className='w-full flex gap-[3%]'>
            <Link
              href='https://web.facebook.com/p/Nasacrown-Mega-Trust-Limited-100075663285420/?locale=eu_ES&paipv=0&eav=AfZT5PM9jgSJD9zsljj5bKzD48wXR2K1_cpscBPaRGmwVk30TH_B9BioXi0QSPtKRvc&_rdc=1&_rdr/'
              className=' w-[6%] min-w-10 aspect-[1/1] items-center justify-center flex'
              target='_blank'
            >
              <FaFacebook
                style={{
                  fontSize: 'clamp(20px,1.5vw,25px)',
                  color: '#fff',
                  background: '#545998',
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  padding: '3px',
                }}
              />
            </Link>
            <Link
              href='https://www.tiktok.com/@nasacrown4/'
              className=' w-[6%] min-w-10  aspect-[1/1] items-center justify-center flex'
              target='_blank'
            >
              <FaTiktok
                style={{
                  fontSize: 'clamp(20px,1.5vw,25px)',
                  color: '#fff',
                  background: '#000',
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  padding: '3px',
                }}
              />
            </Link>
            <Link
              href='https://www.instagram.com/nasacrown_mega_trust_limited'
              className=' w-[6%] min-w-10  aspect-[1/1] items-center justify-center flex'
              target='_blank'
            >
              <FaSquareInstagram
                style={{
                  fontSize: 'clamp(20px,1.5vw,25px)',
                  color: '#fff',
                  background:
                    'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  padding: '3px',
                }}
              />
            </Link>
            <Link
              href='https://www.youtube.com/@nasacrown5708'
              className=' w-[6%] min-w-10  aspect-[1/1] items-center justify-center flex'
              target='_blank'
            >
              <FaYoutube
                style={{
                  fontSize: 'clamp(20px,1.5vw,25px)',
                  color: '#fff',
                  background: '#CD201F',
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  padding: '3px',
                }}
              />
            </Link>
          </div>
        </div>
        <div className='w-full md:w-[15%] text-white gap-5 flex flex-col'>
          <h1 className='font-bold  text-2xl'>Quick Links</h1>
          <ul className='gap-5 flex flex-col'>
            <Link href='/about'>About Us</Link>
            <Link href='/products'>Products</Link>
            <Link href='/contact'>Contact Us</Link>
          </ul>
        </div>
        <div className='w-full md:w-1/5 text-white gap-5 flex flex-col'>
          <h1 className='font-bold  text-2xl'>Our Products</h1>
          <ul className='gap-5 flex flex-col'>
            <Link href='/products/adult'>Nasa Aro Adult Dog Food</Link>
            <Link href='/products/puppy'>Nasa Aro Puppy Food</Link>
          </ul>
        </div>
        <div className='w-full md:w-1/3 text-white gap-5 flex flex-col'>
          <h1 className='font-bold  text-2xl'>Contact Us</h1>
          <div className='flex gap-[2%] items-center'>
            <MdLocationPin />
            <span>
              20 Uko street by 101 Porthacourt road Aba,Abia state,Nigeria
            </span>
          </div>
          <div className='flex gap-[2%] items-center'>
            <IoIosPhonePortrait />
            <span>+4915219288659 | +2349028180990</span>
          </div>
          <div className='flex gap-[2%] items-center'>
            <HiOutlineMailOpen />

            <span>f.uchendu@yahoo.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
