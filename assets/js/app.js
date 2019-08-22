// assets/js/app.js

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Chambre from './components/Chambre';
import Restaurant from './components/Restaurant';
import Spa from './components/Spa';
import Avis from './components/Avis';
require('../css/app.css');

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/chambre' component={Chambre}></Route>
            <Route exact path='/restaurant' component={Restaurant}></Route>
            <Route exact path='/spa' component={Spa}></Route>
            <Route exact path='/avis' component={Avis}></Route>
        </Switch>
    </BrowserRouter>
)

ReactDom.render(<App />, document.getElementById('root'));