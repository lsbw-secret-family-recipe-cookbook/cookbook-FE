import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
            <NavLink to="/">Log In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/add-recipe">Add New Recipe</NavLink>
        </nav>
    )
}
 export default Navigation;