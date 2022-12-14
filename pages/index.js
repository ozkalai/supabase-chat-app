import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Auth from "../components/Auth";
import Chat from "../components/Chat";

export default function Home({ session, supabase }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!session);
  }, [session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Supabase Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {loggedIn ? <Chat supabase={supabase} /> : <Auth supabase={supabase} />}
      </main>
    </div>
  );
}
