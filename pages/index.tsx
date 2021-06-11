import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabrik</title>
        <meta name="description" content="Your universal fake api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col w-full">
        <div className="h-2/6 w-full">head</div>
        <div className="h-4/6 w-full bg-black">foot</div>
      </div>
    </div>
  );
}
