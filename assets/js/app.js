// assets/js/app.js

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Chambre from './components/Chambre';
import Restaurant from './components/Restaurant';
require('../css/app.css');

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/chambre' component={Chambre}></Route>
            <Route exact path='/restaurant' component={Restaurant}></Route>
        </Switch>
    </BrowserRouter>
)

ReactDom.render(<App />, document.getElementById('root'));