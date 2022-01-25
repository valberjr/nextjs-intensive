import styles from "../styles/Stylish.module.css";
import Layout from "../components/Layout";

export default function Stylish() {
  return (
    <Layout title='Modularized CSS Example'>
      <div className={styles.purple}>
        <h1>Style using CSS Module</h1>
      </div>
    </Layout>
  );
}
