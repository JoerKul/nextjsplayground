import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Auth App</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </div>
  );
}
