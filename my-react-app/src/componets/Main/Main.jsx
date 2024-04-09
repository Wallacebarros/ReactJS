import styles from "./Main.module.css"

export default function Main({exemplo}) {
    return(
        <main className={styles.Main}>
            <p>Main</p>
            <p>{exemplo}</p>
        </main>
    )
}