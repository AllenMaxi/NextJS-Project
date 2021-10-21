import React, { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import Nextiwt from "../../components/Nextwit";
import styles from "../../styles/HomePage.module.css";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/statuses/home_timeline"
        );
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <AppLayout>
        <header className={styles.header__homePage}>
          <h2>Inicio</h2>
        </header>
        <section className={styles.section__homePage}>
          {data.map((nextwit) => (
            <Nextiwt key={nextwit.id} nextwit={nextwit} />
          ))}
        </section>
        <nav className={styles.nav__homePage}></nav>
      </AppLayout>
    </>
  );
};

export default HomePage;
