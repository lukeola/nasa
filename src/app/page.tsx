import Hero from '@/components/home/Hero';
import SectionTwo from '@/components/home/SectioTwo';
import SectionFour from '@/components/home/SectionFour';
import SectionOne from '@/components/home/SectionOne';
import SectionThree from '@/components/home/SectionThree';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default page;
