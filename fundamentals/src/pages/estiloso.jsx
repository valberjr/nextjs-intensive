import styles from "../styles/Estiloso.module.css";
import Layout from "../components/Layout";

export default function Estiloso() {
  return (
    <Layout title='Modularized CSS Example'>
      <div className={styles.purple}>
        <h1>Style using CSS Module</h1>
      </div>
    </Layout>
  );
}
