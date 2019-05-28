// assets/js/components/Home.js

import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

class Home extends Component {

    

    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
            </div>
        )
    }
}

export default withRouter(Home);