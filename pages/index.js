import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button/Button";
import GitHub from "../components/Icon/Icon";
import { loginWithGitHub, authChange } from "../firebase/client";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState(undefined);

  console.log(user);

  function handleLogin() {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    authChange(setUser);
  }, []);

  return (
    <>
      <AppLayout>
        <section className={styles.content}>
          <Image src="/twitter.jpg" alt="logo" width={100} height={100} />
          <h1 className={styles.content__title}>Nextwit</h1>
          <h3 className={styles.content__subtitle}>
            Everything about Development
          </h3>
          <div>
            {user === null && (
              <Button onClick={handleLogin}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with Github
              </Button>
            )}{" "}
            {user && user.avatar && (
              <Avatar
                avatar={user.avatar}
                username={user.username}
                email={user.email}
              />
            )}
          </div>
        </section>
      </AppLayout>
    </>
  );
}
