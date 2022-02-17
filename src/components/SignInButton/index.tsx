import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const session = false;

  return session ? (
    <button type="button" className={styles.SignInButton} onClick={() => {}}>
      <img src="https://sujeitoprogramador.com/steve.png" alt="perfil" />
      Olá Everton
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.SignInButton} onClick={() => {}}>
      <FaGithub color="#FFB800" />
      Entrar com Github
    </button>
  );
}
