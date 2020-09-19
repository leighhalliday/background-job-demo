import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Repeater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Look in the API folder</h1>
    </div>
  );
}
