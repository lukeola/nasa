import React from 'react';
import InnerHero from '../InnerHero';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  return (
    <div>
      <InnerHero page='PRODUCTS' />
      <div className='w-full bg-white flex flex-col my-20 gap-5'>
        <h1 className='w-full justify-center flex text-4xl font-bold '>
          Our Products
        </h1>
        <div className='flex flex-col md:flex-row gap-5 px-[5%]'>
          {data.map((item) => (
            <Link
              href={item.link}
              className='w-full md:w-1/2 flex flex-col shadow-2xl rounded-xl gap-5'
              key={item.id}
            >
              <div className='w-full h-[80%] rounded-xl'>
                <Image
                  src={item.image}
                  alt=''
                  width={500}
                  height={500}
                  className='w-full h-full object-cover rounded-t-xl'
                />
              </div>
              <div className='h-[20%] p-[5%] flex flex-col justify-center gap-3'>
                <h1 className='font-bold text-2xl '>{item.header}</h1>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

const data = [
  {
    id: 1,
    image: '/nasacrown-adult.jpg',
    header: 'Nasa Aro Adult Dog Food',
    text: " Nasa Aro dogfood is a balanced and easily digestible complete food and ideal for your adult dog's daily nutrition....",
    link: '/products/adult',
  },
  {
    id: 2,
    image: '/nasacrown-puppy.jpg',
    header: 'Nasa Aro Puppy Food',
    text: "NASA Aro Puppy is best also rich in nutrient that support your puppy's & maintaining balance diet. ...",
    link: '/products/puppy',
  },
];
