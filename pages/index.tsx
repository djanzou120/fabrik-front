import Head from "next/head";
import React, { useState } from "react";
import Tabulations from "../components/Tabulations";
import axios from "axios";
import { is } from "@babel/types";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    axios
      .post("https://fabrik-api.herokuapp.com/api/v1/fake/auth/login")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err.response);
      });
  };

  console.log(isLoading);

  return (
    <div>
      <Head>
        <title>Fabrik</title>
        <meta name="description" content="Your universal fake api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center px-10 py-4">
        <h1 className="text-6xl">Fabrik</h1>
        <ul>
          <li>lorem</li>
        </ul>
      </header>

      <button onClick={getData}>click</button>

      <main className="flex justify-center">
        <div className="md:px-5 px-3 pt-8 pb-14 mt-20 border-2 border-gray-700 shadow-lg rounded-2xl w-11/12 transition transition-all duration-200">
          <Tabulations />
        </div>
      </main>
    </div>
  );
}
