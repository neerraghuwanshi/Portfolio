import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Contact from './Contact'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Home from './Home'
import Default from './Default'
import Wrapper from './Wrapper'


export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Navbar/>   
                <Wrapper>  
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/projects'} component={Projects}/>
                        <Route exact path={'/contact'} component={Contact}/>
                        <Route exact path={'/about'} component={AboutMe}/>
                        <Route exact component={Default}/>
                    </Switch>
                </Wrapper>
            </HashRouter>
        )
    }
}




