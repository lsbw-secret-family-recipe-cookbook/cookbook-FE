import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navigation = ({ history }) => {
    const signOut = () => {
        localStorage.removeItem('token');
        history.push('/log-in');
    };

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-recipe">Add New Recipe</NavLink>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default withRouter(Navigation);
