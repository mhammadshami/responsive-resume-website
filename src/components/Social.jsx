import React from 'react';

// import data
import { social } from '../data';

const Social = () => {
  return <div className='flex justify-between max-w-[250px] gap-10 mb-[35px]'>
    {social.map((item, index) => {
      return <a href={item.href} key={index} className='text-3xl hover:text-accent duration-300 transition-all '>{item.icon}</a>
    })}
  </div>;
};

export default Social;
