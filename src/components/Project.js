import React from 'react'

import styles from '../css/Project.module.css'


function Project({totalImages, title, description}) {

    const images = []
    for (let i = 0; i < totalImages; i++){
        images.push(
            <img 
                key={i}
                alt={title + ' Image'}
                src={`https://s3.ap-south-1.amazonaws.com/neerraghuwanshi.com/images/projects/${title}/${i+1}.png`} 
                className={
                    totalImages === i+1 ?
                        styles.image + ' ' + styles.lastImage :
                        styles.image
                }/>
        )
    }

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.heading}>
                {title}
            </h1>
            <div className={styles.horizontalList}>
                <div className={styles.imageContainer}>
                    {images}
                </div>
            </div>
            <h4 className={styles.description}>
                {description}
            </h4>
        </div>
    )
}


export default Project