import React from "react";
import styles from "../../styles/Hobbies.module.css";
import Link from "next/link";
import AppLayout from "../../components/AppLayout";

const Hobbies = () => {
  return (
    <>
      <AppLayout>
        <h1 className={styles.title}>This is the main Hobbies page</h1>
        <Link href="/">
          <a>Return to Home</a>
        </Link>
      </AppLayout>
    </>
  );
};

export default Hobbies;
