import React from "react";
import Image from "next/legacy/image";

import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className=''>
      {/* top */}
      <div className='flex items-center flex-grow p-1 py-2 bg-amazon_blue'>
        <div className='flex items-center flex-grow mt-2 sm:flex-grow-0 '>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* search box  */}
        <div className='items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500'>
          <input
            className='flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none'
            type='text'
          />
          <BiSearchAlt2 className='w-6 h-6 m-2 ml-3' />
        </div>
        {/* Right coner */}
        <div className='flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap'>
          <div className=' link'>
            <p>Hello, Heriel David</p>
            <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
          </div>
          <div className=' link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative flex items-center link'>
            <span className='absolute top-0 px-1 text-black bg-yellow-400 rounded-full -right-1 md:right-10'>
              0
            </span>
            <AiOutlineShoppingCart className='w-12 h-12 ' />
            <p className='hidden mt-2 font-extrabold md:inline md:text-sm'>
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav*/}
      <div className='flex items-center p-2 pl-6 space-x-3 text-sm text-white p bg-amazon_blue-light '>
        <p className='flex items-center link'>
          <AiOutlineMenu className='w-6 h-6 mr-2 ' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Bussines</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden link lg:inline-flex'>Electronics</p>
        <p className='hidden link lg:inline-flex'>Food & Grocery</p>
        <p className='hidden link lg:inline-flex'>Prime</p>
        <p className='hidden link lg:inline-flex'>Buy Again</p>
        <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
        <p className='hidden link lg:inline-flex'>Heathy & Personal Care</p>
      </div>
    </div>
  );
};

export default Header;
