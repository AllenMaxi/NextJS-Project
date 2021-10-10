import styles from "../../styles/Home.module.css";

const Avatar = ({ avatar, username, email }) => {
  return (
    <div className={styles.user__info}>
      <img src={avatar} alt={username} className={styles.image} />
      <strong>{username}</strong>
      <p>
        <span>{email}</span>
      </p>
    </div>
  );
};

export default Avatar;
