import React from "react";
import Navigation from "../components/Navigation";
import RecipeUpdateForm from "../components/RecipeUpdateForm";

const UpdateRecipe = () => {
    return (
        <div className="full-recipe-wrapper">
            <Navigation />
            <RecipeUpdateForm />
        </div>
    )
}

export default UpdateRecipe;