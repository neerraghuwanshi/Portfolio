import React, { Component } from 'react'

import Project from './Project'
import styles from '../css/Projects.module.css'


export default class Projects extends Component {
    render() {

        const images1 = [
            'proearns1.png',
            'proearns2.png',
            'proearns3.png',
            'proearns4.png',
            'proearns5.png',
            'proearns6.png',
            'proearns7.png',
            'proearns8.png',
            'proearns9.png',
            'proearns10.png',
            'proearns11.png',
            'proearns12.png',
            'proearns13.png',
            'proearns14.png',
            'proearns15.png',
            'proearns16.png',
            'proearns17.png',
        ]
        const images2 = [
            'proearnsWebsite1.png',
            'proearnsWebsite2.png',
            'proearnsWebsite3.png',
            'proearnsWebsite4.png',
            'proearnsWebsite5.png',
            'proearnsWebsite6.png',
            'proearnsWebsite7.png',
        ]
        const images3 = [
            'SoMe1.png',
            'SoMe2.png',
            'SoMe3.png',
            'SoMe4.png',
            'SoMe5.png',
            'SoMe6.png',
            'SoMe7.png',
            'SoMe8.png',
            'SoMe9.png',
            'SoMe10.png',
        ]
        const images4 = [
            'so-me1.png',
            'so-me2.png',
            'so-me3.png',
            'so-me4.png',
        ]
        const images5 = [
            'youtube1.png',
            'youtube2.png',
            'youtube3.png',
            'youtube4.png',
        ]

        return (
            <div id={styles.projectsFirstDiv}>
                <Project 
                    title={'Proearns App'}
                    images={images1}
                    description={
                        'A digital marketing app available on google play store. Users get paid to watch ads.'
                    }/>
                <hr className={styles.hr}/>
                <Project 
                    title={'Proearns Website'}
                    images={images2}
                    description={'An introductory website about the Vision, Contact, T&C and Privacy Policy of Proearns.'}/>
                <hr className={styles.hr}/>
                <Project 
                    title={'So-Me App'}
                    images={images3}
                    description={'A social media mobile application like instagram with real time messaging.'}/>
                <hr className={styles.hr}/>
                <Project 
                    title={'So-Me Website'}
                    images={images4}
                    description={'A social media website for real time messaging.'}/>
                <hr className={styles.hr}/>
                <Project 
                    title={'Youtube Clone'}
                    images={images5}
                    description={'A website that fetches videos from YouTube for a search keyword.'}/>
            </div>
        )
    }
}