import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Puppy = () => {
  return (
    <div className='w-full flex flex-col items-center bg-gray-300 mt-32 py-8 gap-8'>
      <div className='w-4/5 bg-white flex flex-col gap-4 items-center py-10 px-[5%]'>
        <div>
          <Image src='/nasacrown-puppy.jpg' alt='' width={500} height={500} />
        </div>
        <div>
          <h1 className='font-bold text-2xl my-5'>Nasa Aro Puppy Dog Food</h1>
          <div>
            <h1 className='font-bold text-xl my-5'>
              Why a special food for small puppies?
            </h1>
            <p>
              The growth phase of your puppy is an important stage in life. It
              is the time of physical changes and new discoveries. While your
              puppy is still growing, it should be ensured that their diet is
              contributing to optimal health. Nasa Aro Puppy Food is suitable
              for puppies . In order to promote the natural defenses of the
              puppy, NASA Aro Puppy is best also rich in nutrient that support
              your puppy&apos;s & maintaining balance diet. It is important that
              your puppy&apos;s energy needs are adequately accounted for
              through their diet. This is a reason you need NASA ARO Puppy Food
              in wet is high in energy to meet your little puppy&apos;s energy
              needs.
            </p>
            <h2 className='font-bold text-xl my-5'>
              Our values are quality, reliability, best & more.
            </h2>
            <ul className='flex flex-col gap-3'>
              <li>
                Nasa Aro products go through a comprehensive quality control in
                order to guarantee an optimal feed quality and to meet the
                individual nutritional needs as well as the lifestyle of your
                puppy.
              </li>
              <li>
                Pet owners are increasingly aware of the impact of nutrition and
                longevity of their pets
              </li>
              <li>
                The production process is extremely hygienic and efficiently
                organised, and the products are labelled & packaged well.
              </li>
              <li>Nasa Aro dogfood focused on quality.</li>
              <li>
                NASA Aro dogfood is the best adult food in the form of
                high-quality meat chunks in gravy.
              </li>
              <li>
                NASA Aro dogfood used real meat as a major ingredient, the
                company&apos;s products meet the highest European standards .
              </li>
            </ul>
            <div className='font-semibold py-4'>
              Note: The Nasa Aro dogfood net weight is 410gm in each tin or cans
            </div>
          </div>
        </div>
      </div>
      <div className='w-4/5'>
        <Link href='/products/adult' className='text-lg text-blue-900'>
          Previous post
        </Link>
      </div>
    </div>
  );
};

export default Puppy;
