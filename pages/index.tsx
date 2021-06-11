import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

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
        <Footer />
      </div>
    </div>
  );
}
