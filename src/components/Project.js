import React from 'react'

import styles from '../css/Project.module.css'


function Project({images, title, description}) {

    const photos = images.map((image, index) => {
        return(
            <img 
                key={index}
                alt=''
                src={`https://neerraghuwanshi.s3.ap-south-1.amazonaws.com/${image}`} 
                className={
                    images.length === index+1 ?
                        styles.image + ' ' + styles.lastImage :
                        styles.image
                }/>
    )})

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.heading}>
                {title}
            </h1>
            <div className={styles.horizontalList}>
                <div className={styles.imageContainer}>
                    {photos}
                </div>
            </div>
            <h4 className={styles.description}>
                {description}
            </h4>
        </div>
    )
}


export default Project