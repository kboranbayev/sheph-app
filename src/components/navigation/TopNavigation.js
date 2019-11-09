import React from "react";
import { NavLink } from "react-router-dom";

const TopNavigation = () =>
    (
        <div>
            <NavLink name="Home" exact activeStyle={{ color: 'red' }} to="/">Home</NavLink>
            <NavLink name="About" exact activeStyle={{ color: 'red' }} to="/about">About</NavLink>
            <NavLink name="Contact" exact activeStyle={{ color: 'red' }} to="/contact">Contact</NavLink>
        </div>
    );


export default TopNavigation;
