import styles from './styles.module.scss';
import Head from "next/head";

export default function Donate(){
    return(
        <>
        <Head>
            <title>Ajude a plataforma Board ficar online!</title>
        </Head>
        <main className={styles.container}>
            <img src="/images/rocket.svg" alt="seja apoiador" />

            <h1>Seja um apoiador deste projeto 🏆</h1>
            <h3>contribua com apenas <span>R$ 1,00</span></h3>
            <strong> Apareça na nossa home, tenha funcionalidades exlusivas.</strong>
        </main>
        </>
    )
}