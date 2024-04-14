import styles from "./Main.module.css"

export default function Main({exemplo}) {
    return(
        <main className={styles.Main}>
            <p>Main</p>
            <p>{exemplo}</p>

            <p>Evento:</p>
            <button onClick={console.log("teste")}>evento</button>
        </main>
    )
}