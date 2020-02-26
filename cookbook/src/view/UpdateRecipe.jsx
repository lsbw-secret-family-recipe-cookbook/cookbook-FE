import React from "react";
import Navigation from "../components/Navigation";
import RecipeUpdateForm from "../components/RecipeUpdateForm";

const UpdateRecipe = () => {
    return (
        <div className="full-recipe-wrapper">
            {console.log("Navigation")}
            <Navigation />
            {console.log("RecipeUpdateForm")}
            <RecipeUpdateForm />
        </div>
    )
}

export default UpdateRecipe;