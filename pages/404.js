import Link from "next/link";
import styles from "../styles/error.module.css";
export default function CustomError() {
  return (
    <>
      <h2 className={styles.error}>404 Error.</h2>
      <p>Please return to main</p>
      <Link href="/">
        <a>
          <button>to main</button>
        </a>
      </Link>
    </>
  );
}
