import React from 'react'
import styles from '../css/Home.module.css'


const Home = () => {

    return (
        <div id={styles.container}>
            <h1 id={styles.firstName} className={styles.name}>Neer</h1>
            <h1 id={styles.lastName} className={styles.name}>
                &nbsp;Raghuwanshi
            </h1>
        </div>
    )     
}


export default Home