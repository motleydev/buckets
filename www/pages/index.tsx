import type { NextPage } from "next";
import Head from "next/head";
import { useStore } from "../store";

import Buckets from "../components/Buckets";
import Items from "../components/Items";

const Home: NextPage = () => {
  const { draggedItem, receivingBucket } = useStore((store) => store);
  return (
    <div className="container py-6">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-2 gap-x-4 mx-auto max-w-3xl mb-4">
        <Items />
        <Buckets />
      </main>
    </div>
  );
};

export default Home;
