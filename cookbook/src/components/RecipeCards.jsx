import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeCards = props => {
  console.log("recipes", props.recipes);
  return props.recipes.map(recipe => (
    <RecipeCard recipe={recipe} key={recipe.id} />
  ));
};

export default RecipeCards;
