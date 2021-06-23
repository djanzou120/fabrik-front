import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <div className="h-screen flex flex-col w-full">
        <Header />
        <main className="bg-black px-3 text-gray-200 border-4 border-gray-800 shadow-lg rounded-2xl w-80 sm:w-3/5 h-96 absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Tabulations />
        </main>
        <Footer />
      </div>
    </div>
  );
}
