// assets/js/components/Home.js

import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import WidgetBlock from '../components/WidgetBlock'
import { withRouter } from 'react-router-dom'

class Home extends Component {

    

    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <WidgetBlock />
            </div>
        )
    }
}

export default withRouter(Home);