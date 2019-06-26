import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeCards = props => {
  return props.recipes.map(recipe => (
    <RecipeCard recipe={recipe} key={recipe.id} />
  ));
};

export default RecipeCards;
