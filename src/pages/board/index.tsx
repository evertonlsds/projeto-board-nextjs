import styles from "./styles.module.scss";
import Head from "next/head";
import { FiCalendar, FiEdit2, FiPlus, FiTrash } from "react-icons/fi";

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas tarefas-Board</title>
      </Head>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Digite sua tarefa" />
          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>

        <h1>você tem 2 tarefas</h1>

        <section>
          <article className={styles.taskList}>
            <p>
              Aprender a criar projetos usando Next JS e aplicamdo firebase com
              back
            </p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#FFB800" />
                  <time> 12 fevereiro 2022</time>
                </div>
                <button>
                  <FiEdit2 size={20} color="#fff" />
                  <span>Editar</span>
                </button>
              </div>
              <button>
                <FiTrash size={20} color="#ff3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
