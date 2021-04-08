
import React, { useState } from 'react';

import './Header.css';

const Header = () => {

    return (
        <header>
            <h1>Welcome to No Barking</h1>
            <div>
                <img src={"https://i.dlpng.com/static/png/6345652_preview.png"} alt="cute-pup" width="200" height="200"/>
            </div>
        </header>
    );
}

export default Header;