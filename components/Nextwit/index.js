import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "../../styles/HomePage.module.css";

const Nextiwt = ({ nextwit }) => {
  return (
    <article key={nextwit.id} className={styles.nextwit}>
      <Avatar
        avatar={nextwit.avatar}
        username={nextwit.username}
        text={nextwit.message}
      />
    </article>
  );
};

export default Nextiwt;
