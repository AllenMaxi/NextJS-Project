import AppLayout from "../../../components/AppLayout";
import Button from "../../../components/Button/Button";
import styles from "../../../styles/ComposeNextwit.module.css";

export default function ComposeNextwit() {
  return (
    <AppLayout>
      <div className={styles.nextwit__container}>
        <textarea
          placeholder="Que estas pensando?"
          className={styles.textarea}
        ></textarea>
        <Button>Enviar</Button>
      </div>
    </AppLayout>
  );
}
