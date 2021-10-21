import styles from "../../styles/Home.module.css";

const Avatar = ({ avatar, username, email, text }) => {
  return (
    <div className={styles.user__info}>
      <div className={styles.user__head}>
        <img src={avatar} alt={username} className={styles.image} />
        <h3>{username}</h3>
      </div>
      {text && <strong className={styles.user__nextwit}>{text}</strong>}
      <p>
        <span>{email}</span>
      </p>
    </div>
  );
};

export default Avatar;
