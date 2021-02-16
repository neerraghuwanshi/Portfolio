import React, { Component } from 'react'
import CentreText from './CentreText'

export default class Default extends Component {
    render() {

        const text = "Page Not Found"

        return (
            <CentreText text={text}/>
        )
    }
}
