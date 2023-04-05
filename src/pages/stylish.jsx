import styles from '../styles/Stylish.module.css'
import Layout from '../components/Layout'

export default function Stylish() {
    return(
        <Layout title="Exemple de CSS modularizado">
            <div className={styles.red}>
            <h1> Estilo usando CSS modulos </h1>
        </div>
        </Layout>
    )
}