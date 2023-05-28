import type { GetServerSidePropsContext, NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
// import Banner from "../components/Banner";
interface Props {
  products: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
    rating: { rate: number; count: number };
  };
}

const Home: NextPage<Props> = (props) => {
  return (
    <div className='items-center justify-center '>
      <Head>
        <title>Amazon Clone by Heriel</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='mx-auto max-w-screen-2xl'>
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={props.products} />
      </main>
      {/* ---- ---- */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
    },
  };
};
