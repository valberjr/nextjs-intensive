import styles from "../styles/Estiloso.module.css";
import Link from "next/link";

export default function Estiloso() {
  return (
    <div className={styles.purple}>
      <Link href="/">Voltar</Link>
      <h1>Style using CSS Module</h1>
    </div>
  );
}
