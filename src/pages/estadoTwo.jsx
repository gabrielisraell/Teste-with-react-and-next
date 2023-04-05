import Layout from "../components/Layout";
import React, { useState } from "react";
import styles from '../styles/button.module.css'

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
   <Layout title="second teste with state">
     <div>
      <p>You clicked {count} times</p>
      <button className={styles.buttonCount} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
   </Layout>
  );
}
