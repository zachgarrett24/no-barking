import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import {
    Header,
    BarkMeter,
    SideNav
} from './components';

import './index.css';

const App = () => {
    return (
        <div id="App">
            <Router>
            <SideNav />
                <div className={"container"}>
                    <Header />
                    <BarkMeter />
                </div> 
            </Router>  
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);