'use client';
import React, { useState } from 'react';
import InnerHero from '../InnerHero';
import { MdLocationPin } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaTiktok } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import Link from 'next/link';

const Contact = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async (e: any) => {
    console.log(e);
    try {
      const response = await axios.post(
        'https://api.precisioninfotech.com/contact',
        e
      );

      if (response.status === 200) {
        console.log(response);
        toast.success('Message Sent');
        reset;
      } else {
        toast.error('An error occured');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occured');
    }
  };
  return (
    <div>
      <InnerHero page='CONTACT' />
      <div className='w-full py-20 flex items-center flex-col'>
        <div className='w-[90%] md:w-4/5 flex flex-col gap-8 items-center'>
          <h1 className='text-4xl font-bold '>Get In Touch</h1>

          <div className='flex gap-5'>
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
          <div className='w-full flex flex-col md:flex-row gap-12 md:gap-[5%]'>
            {data.map((item) => (
              <div
                className='w-full md:w-[30%] px-[5%] gap py-5 shadow-2xl rounded-lg flex flex-col gap-5'
                key={item.id}
              >
                <div className='bg-gray-300 rounded-full w-[20%] aspect-[1/1] flex justify-center items-center text-2xl text-blue-600'>
                  {item.icon}
                </div>
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p className='text-gray-600'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full p-12 bg-white flex flex-col items-center'>
        <h2 className='text-2xl font-semibold mb-4'>Send us a Message</h2>
        <div className='my-5'>We would love to hear from you!</div>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-3/5'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              {...register('name')}
              className='mt-1 p-2 w-full border-gray-500 border border-solid rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              {...register('email')}
              className='mt-1 p-2 w-full border-gray-500 border border-solid rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              {...register('message')}
              className='mt-1 p-2 w-full md:aspect-[9/1] border-gray-500 border border-solid rounded-md'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;

const data = [
  {
    id: 1,
    icon: <MdLocationPin />,
    title: 'Our Location',
    text: '20 Uko street by 101 Porthacourt road Aba,Abia state,Nigeria',
  },
  {
    id: 2,
    icon: <FaPhone />,
    title: 'Call Us On',
    text: '+4915219288659 | +2349028180990',
  },
  {
    id: 3,
    icon: <HiOutlineMailOpen />,
    title: 'Email us',
    text: 'f.uchendu@yahoo.com',
  },
];
