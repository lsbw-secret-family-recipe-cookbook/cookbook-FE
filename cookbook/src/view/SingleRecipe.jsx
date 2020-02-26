import React from "react";
import Recipe from "../components/Recipe";
import Navigation from "../components/Navigation";
// import RecipeCards from "../components/RecipeCards";

const SingleRecipe = props => {
  return (
    <div className="full-recipe-wrapper">
      {console.log("Navigation")}
      <Navigation />
      {console.log("Recipe")}
      <Recipe recipeID={props.match.params.id} />
      {/* <RecipeCards /> */}
    </div>
  );
};

export default SingleRecipe;
