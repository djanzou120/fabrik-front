import Head from "next/head";
import React from "react";
import Tabulations from "../components/Tabulations";
import { useAxios } from "../hooks";

export default function Home() {
  const { getData, isLoading, data, error } = useAxios({
    url: "https://fabrik-api.herokuapp.com/api/v1/fake/auth/login",
    method: "POST",
    input: {
      email: "philippe.tedajo@gmail.com",
      password: "12345",
    },
    token:
      "eyJhbGcaiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3MjhtNHUxRkoiLCJpYXQiOjE2MjQ0NzIyMDAsImV4cCI6MTYyNDU1ODYwMH0.tVJ7IcF6u4Rp3LynGRk6cZF2WV-607VM3wnPayy6nfk",
  });

  console.log(isLoading, data, error);

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
          <li onClick={getData}>lorem</li>
        </ul>
      </header>

      <main className="flex justify-center items-center flex-col border">
        <div className="border-2 blurred-box md:px-5 px-3 pt-8 pb-14 mt-20 shadow-lg rounded-2xl w-11/12 transition transition-all duration-200">
          <Tabulations />
        </div>
        <div className="border-2 w-96 h-96">Console</div>
      </main>
    </div>
  );
}
