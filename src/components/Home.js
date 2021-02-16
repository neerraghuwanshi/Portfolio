import React from 'react'
import styles from '../css/Home.module.css'


const Home = () => {

    return (
        <div id={styles.container}>
            <h1 
                className={styles.name} 
                id={styles.firstName}>
                {'Neer'}
            </h1>
            <h1 
                className={styles.name}
                id={styles.lastName}>
                {'Raghuwanshi'}
            </h1>
        </div>
    )     
}


export default Home