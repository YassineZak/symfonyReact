// assets/js/app.js

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Chambre from './components/Chambre';
import Restaurant from './components/Restaurant';
import Avis from './components/Avis'
import Reservation from './components/Reservation'
require('../css/app.css');

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/chambre' component={Chambre}></Route>
            <Route exact path='/restaurant' component={Restaurant}></Route>
            <Route exact path='/avis' component={Avis}></Route>
            <Route exact path='/reservation' component={Reservation}></Route>
        </Switch>
    </BrowserRouter>
)

ReactDom.render(<App />, document.getElementById('root'));