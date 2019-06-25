import React from "react";
import RecipesSidebar from "../components/RecipeSidebar";
import Navigation from "../components/Navigation"

const RecipesDashboard = () => {
    return(
    <div className="dashboard=wrapper">
    <Navigation/>
    <RecipesSidebar/>
    </div>
    )
}

export default RecipesDashboard;