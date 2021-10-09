import Head from "next/head";
import styles from "../../styles/AppLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nextwit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main__content}>{children}</main>
      </div>
    </>
  );
};

export default AppLayout;