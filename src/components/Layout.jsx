import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout(props) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
            <h1> {props.title ?? 'mais um example'} </h1>
          <Link href="/">
           back
          </Link>
        </div>
        <div className={styles.content}>
            {props.children}
        </div>
      </div>
    </>
  );
}
