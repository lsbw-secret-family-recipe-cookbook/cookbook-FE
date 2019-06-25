import React from "react";
import { NavLink, Route } from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sign-out">Sign Out</NavLink>
            <Route exact path="/" component={RecipeList}/>
            <Route path="/sign-out" component={SignInPage}/>
        </nav>
    )
}
