import Head from "next/head";
import React from "react";
import Tabulations from "../components/Tabulations";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabrik</title>
        <meta name="description" content="Your universal fake api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <main className="md:px-5 px-3 border-4 shadow-lg rounded-2xl w-11/12 h-96 absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Tabulations />
        </main>
      </div>
    </div>
  );
}
