import React, { Component } from 'react'

import Project from './Project'
import styles from '../css/Projects.module.css'


export default class Projects extends Component {
    render() {
        return (
            <div id={styles.projectsFirstDiv}>
                <Project 
                    title={'Proearns App'}
                    totalImages={17}
                    description={
                        'A digital marketing app available on google play store. Users get paid to watch ads.'
                    }/>
                <hr className={styles.hr}/>
                <Project
                    title={'Proearns Website'}
                    totalImages={7}
                    description={'An introductory website about the Vision, Contact, T&C and Privacy Policy of Proearns.'}/>
                <hr className={styles.hr}/>
                <Project 
                    title={'So-Me App'}
                    totalImages={10}
                    description={'A social media mobile application like instagram with real time messaging.'}/>
                <hr className={styles.hr}/>
                <Project 
                    title={'So-Me Website'}
                    totalImages={4}
                    description={'A social media website for real time messaging.'}/>
                <hr className={styles.hr}/>
                <Project 
                    title={'Youtube Clone'}
                    totalImages={4}
                    description={'A website that fetches videos from YouTube for a search keyword.'}/>
            </div>
        )
    }
}