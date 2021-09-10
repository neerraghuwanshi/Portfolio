import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Contact from './Contact'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Home from './Home'
import Default from './Default'
import Wrapper from './Wrapper'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Wrapper>  
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/projects'} component={Projects}/>
                        <Route exact path={'/contact'} component={Contact}/>
                        <Route exact path={'/about'} component={AboutMe}/>
                        <Route exact component={Default}/>
                    </Switch>
                </Wrapper>
            </BrowserRouter>
        )
    }
}




