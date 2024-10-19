import React from 'react';

interface Prop {
  page: string;
}

const InnerHero: React.FC<Prop> = ({ page }) => {
  return (
    <div>
      <div className='w-full bg-slate-600 rounded-br-[7rem] h-[50vh] mt-32 flex items-center'>
        <h1 className='text-white font-bold text-4xl pl-[5%] '>{page}</h1>
      </div>
    </div>
  );
};

export default InnerHero;
