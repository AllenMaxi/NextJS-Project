import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button/Button";
import GitHub from "../components/Icon/Icon";
import styles from "../styles/Home.module.css";

export default function Home() {
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
            <Button>
              <GitHub fill="#fff" width={24} height={24} />
              Login with Github
            </Button>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
