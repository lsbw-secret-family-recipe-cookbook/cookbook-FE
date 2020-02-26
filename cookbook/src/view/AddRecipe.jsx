import React from "react";
import RecipeForm from "../components/RecipeForm";
import Navigation from "../components/Navigation";

const AddRecipe =() => {
    return (
        <>
        {console.log("Navigation")}
        <Navigation/>
        {console.log("RecipeForm")}
        <RecipeForm/>
        </>
    )
}

export default AddRecipe;