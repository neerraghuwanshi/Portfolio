import React, { Component } from 'react'
import styles from '../css/AboutMe.module.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div id={styles.aboutmeFirstDiv}>
                <div>
                    <p className={styles.aboutSection}>
                        Founder and developer of
                        <a 
                            target={'_blank'} 
                            className={styles.link} 
                            rel="noopener noreferrer" 
                            href='https://play.google.com/store/apps/details?id=com.proearns'>
                            {' Proearns'}
                        </a>
                        , a digital marketing app available on google play store.
                    </p>
                    <p className={styles.aboutSection}>
                        {'A tech enthusiast, who is dedicated and efficient in full stack development with 2 years of experience in writing scalable code, designing complex fronted & responsive designs, writing efficient APIs, working on databases and cloud computing. Seeking to further improve my development skills by working on more extensive and interesting projects.'}
                    </p>
                    <p className={styles.aboutSection}>
                        With a vision to learn new each day and master fields of my interest to contribute in innovation and problem solving.
                    </p>
                    <p className={styles.aboutSection}>
                        Here is my 
                        <a 
                            target={'_blank'} 
                            className={styles.link} 
                            rel="noopener noreferrer" 
                            href='https://neerraghuwanshi.s3.ap-south-1.amazonaws.com/resume.pdf'>
                            {' Resume '}
                        </a>
                        and
                        <a 
                            target={'_blank'} 
                            className={styles.link} 
                            rel="noopener noreferrer" 
                            href='https://neerraghuwanshi.s3.ap-south-1.amazonaws.com/cv.pdf'>
                            {' CV'}
                        </a>.
                    </p>
                </div>
            </div>
        )
    }
}