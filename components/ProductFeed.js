import Image from "next/legacy/image";
import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
      {products.slice(0, 4).map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <img
        className='mx-auto md:col-span-full'
        src='https://links.papareact.com/dyz '
        alt=''
      />
      <div className='md:col-span-2'>
        {products.slice(4, 5).map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      {products.slice(5, 13).map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <div className='md:col-span-2'>
        {products.slice(13, 14).map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      {products.slice(14, products.length).map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductFeed;
