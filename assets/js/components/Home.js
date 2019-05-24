// assets/js/components/Home.js

import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import CarouselComponent from '../components/Carousel';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

class Home extends Component {

    

    render() {
        return (
            <div>
                <NavBar />
                <CarouselComponent />
            </div>
        )
    }
}

export default withRouter(Home);