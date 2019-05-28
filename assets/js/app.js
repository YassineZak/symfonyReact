// assets/js/app.js

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Chambre from './components/Chambre';
require('../css/app.css');

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/chambre' component={Chambre}></Route>
        </Switch>
    </BrowserRouter>
)

ReactDom.render(<App />, document.getElementById('root'));