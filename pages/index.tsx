import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabrik</title>
        <meta name="description" content="Your universal fake api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col w-full">
        <div className="h-2/6 w-full bg-gradient-to-tr from-blue-500 to-purple-700">
          head
        </div>
        <div className="h-4/6 w-full bg-black">foot</div>
      </div>
    </div>
  );
}
