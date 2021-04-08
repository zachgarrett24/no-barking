import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
    Header
} from './components';

const App = () => {
    return (
        <div id="App">
            <Header />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);