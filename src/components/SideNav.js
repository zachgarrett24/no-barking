import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './SideNav.css';

const SideNav = () => {

    return (
        <div className={"container"}>
            <NavLink to={"/home"} className={"item"}>Home</NavLink>
            <NavLink to={"/profile"} className={"item"}>Profile</NavLink>
            <NavLink to={"/listen"} className={"item"}>Listen</NavLink>
            <NavLink to={"/settings"} className={"item"}>Settings</NavLink>
            <NavLink to={"/store"} className={"item"}>Store</NavLink>
            <NavLink to={"/contact"} className={"item"}>Contact</NavLink>
        </div>
    );
}

export default SideNav;