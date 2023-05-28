import React, { useState } from "react";
import Image from "next/legacy/image";
import { AiFillStar } from "react-icons/ai";
import CurrencyFormat from "react-currency-format";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({
  product: { id, title, price, description, category, image },
}) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className='relative z-30 flex flex-col p-10 m-5 bg-white shadow-lg rounded-xl'>
      <p className='absolute text-xs italic text-gray-400 top-2 right-4'>
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4 className='my-3'>{title}</h4>
      {/* <div className='flex justify-start'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <div>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjay_jfdRhEKEgCnrexE0NhfsgjvpW8H1Tw&usqp=CAU'
                height={20}
                // className='text-yellow-500 '
                // objectFit='contain'
                key={i}
                alt=''
              />
            </div>
          ))}
      </div> */}
      <p className='my-2 text-xs line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <CurrencyFormat
          thousandSeparator={true}
          displayType='text'
          className='text-black'
          value={price}
          prefix='$'
        />
      </div>
      {
        // hasPrime && (
        //   <div className='flex items-center -mt-5 space-x-3'>
        //     {/* <Image
        //       width={48}
        //       height={50}
        //       src='https://links.papareact.com/fdw'
        //       objectFit='contain'
        //     /> */}
        //     <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        //   </div>
        // )
      }

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  );
};

export default Product;
