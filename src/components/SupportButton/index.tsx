import Link from "next/link";
import styles from "./styles.module.scss";

export default function SupportButton() {
  return (
    <div className={styles.doanteContainer}>
      <Link href="/donate">
          <button>apoiar</button>
      </Link>
    </div>
  );
}
