import React from 'react';
import InnerHero from '../InnerHero';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <InnerHero page='ABOUT' />
      <div>
        <main className='container mx-auto py-12 px-4'>
          <h1 className='text-4xl font-bold mb-6 '>About Us</h1>
          <p className='text-lg text-blue-900 mb-4'>
            Nasacrown Mega Trust Limited is a registered business in Nigeria.
            Our company&apos;s mission and goals are to dominate the market and
            be a leading force in businesses such as introducing the best
            quality dog food in the Nigerian market.
          </p>
          <p className='text-lg text-blue-900 mb-4'>
            Nasa Aro is one of the best quality dog foods for puppies & adults.
            The quality is not compromised unlike most pet foods in the market.
            Nasa Aro dog food comes in two different types: Adult & Puppy, in
            410gm tins. We believe in honesty and strive for the best. Nasa Aro
            dog food is a registered product of Nasacrown Mega Trust Limited.
          </p>
          <p className='text-lg text-blue-900 mb-4'>
            Our company needs distributors in Nigeria as we plan to dominate the
            market in all aspects. Interested distributors should contact us
            through our address:
          </p>
          <address className='text-lg text-blue-900 mb-4'>
            20 Uko Street by 101 Porthacourt Road, Aba, Abia State, Nigeria.
          </address>
          <p className='text-lg text-blue-900 mb-4'>
            For interested buyers, we offer waybill services to any state in
            Nigeria, and our service is very reliable. Nasacrown Mega Trust
            Limited also imports agricultural machines, POP cement, and more.
            Let us know for any of our products and services you need.
          </p>
          <p className='text-lg text-blue-900 mb-4'>
            We import used and new trucks, trailers, and cars. For any type of
            vehicle, we are the best-trusted import company you need to get the
            job done. We are honest, sincere, and available to serve better.
          </p>
          <h2 className='text-2xl font-boldmb-4'>Company Mission and Goals:</h2>
          <p className='text-lg text-blue-900'>
            Our mission and goal are to dominate the market and be a
            fast-leading force in business by introducing the best quality dog
            food in the Nigerian market.
          </p>
        </main>
      </div>
    </div>
  );
};

export default About;
