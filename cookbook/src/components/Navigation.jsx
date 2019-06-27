import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/log-in">Log In</NavLink>
            <NavLink to="/add-recipe">Add New Recipe</NavLink>
        </nav>
    )
}
 export default Navigation;