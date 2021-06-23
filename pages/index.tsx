import Head from "next/head";
import React from "react";
import { useTheme } from "next-themes";
import Tabulations from "../components/Tabulations";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>Fabrik</title>
        <meta name="description" content="Your universal fake api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border">
        <h1 className="text-6xl">Fabrik</h1>
        <div>
          The current theme is: {theme}
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
      </header>

      <main className="flex justify-center">
        <div className="md:px-5 px-3 mt-20 border-2 shadow-lg rounded-2xl w-11/12 h-96 ">
          <Tabulations />
        </div>
      </main>
    </div>
  );
}
