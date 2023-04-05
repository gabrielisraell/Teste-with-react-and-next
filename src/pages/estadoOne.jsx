import Layout from "../components/Layout";
import { useState } from "react"; 
import styles from '../styles/button.module.css'

export default function EstadoOne() {
    const [ number, setNumber] = useState(0)  // react hooks

    function increment() {
        setNumber(number + 1)
    }

    return(
        <Layout title="teste estado number one">
            <div>
                {number}
            </div>
            <button className={styles.buttonCount} onClick={increment}> Incrementar </button>
        </Layout>
    )
}