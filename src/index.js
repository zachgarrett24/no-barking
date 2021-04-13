import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
    Header,
    BarkMeter
} from './components';

const App = () => {
    return (
        <div id="App">
            <Header />
            <BarkMeter />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);