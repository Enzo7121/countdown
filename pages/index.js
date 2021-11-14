import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const calculateTimeLeft = () => {
  let difference = new Date("December 25, 2021 24:00:00") - new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60) / 24),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
};

const Home = () => {
  const [time, setTime] = useState({});

  useEffect(() => {
    const sec = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);
    return () => {
      clearTimeout(sec);
    };
  }, [time]);

  return (
    <main className={styles.container}>
      <Head>
        <title>Navidad | Cuenta atras</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1 className={styles.title}>¿Cuanto falta para navidad?</h1>
      </div>
      <div className={styles.time}>
        <div className={styles.timeData}>
          <h1>{time.days}</h1>
          <p>Days</p>
        </div>
        <div className={styles.vline} />
        <div className={styles.timeData}>
          <h1>{time.hours}</h1>
          <p>Hours</p>
        </div>
        <div className={styles.vline} />
        <div className={styles.timeData}>
          <h1>{time.minutes}</h1>
          <p>Minutes</p>
        </div>
        <div className={styles.vline} />
        <div className={styles.timeData}>
          <h1>{time.seconds}</h1>
          <p>Seconds</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
