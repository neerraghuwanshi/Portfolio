import React, { Component } from 'react'
import styles from '../css/AboutMe.module.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div id={styles.aboutmeFirstDiv}>
                <div id={styles.aboutMeSecondDiv}>
                    <p className={styles.aboutSection}>
                        Founder and developer of
                        <a
                            target={'_blank'} 
                            className={styles.link} 
                            rel="noopener noreferrer" 
                            href='https://play.google.com/store/apps/details?id=com.proearns'>
                            {' Proearns'}
                        </a>
                        , a digital marketing app available on google play store which allows its users to get paid for watching advertisements.
                    </p>
                    <p className={styles.aboutSection}>
                        Fascinated by computers and related technologies which drives me to work and learn new each day. Love challenges and overcome them by devising a better problem-solving method.
                    </p>
                    <p className={styles.aboutSection}>
                        A passionate tech enthusiast and quick learner who is dedicated and efficient in full stack development with 2+ years of experience in writing scalable code, designing complex fronted and responsive designs, writing efficient APIs, working on databases and cloud computing. Seeking to further improve my development skills by working on more extensive and interesting projects.
                    </p>
                    <p className={styles.aboutSection}>
                        Here is my 
                        <a 
                            target={'_blank'} 
                            className={styles.link} 
                            rel="noopener noreferrer" 
                            href='https://neerraghuwanshi.s3.ap-south-1.amazonaws.com/resume.pdf'>
                            {' Resume'}
                        </a>.
                    </p>
                </div>
            </div>
        )
    }
}