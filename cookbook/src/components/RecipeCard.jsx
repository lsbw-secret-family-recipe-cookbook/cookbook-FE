import React from "react";

const RecipeCard= recipe => {
    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>From: {recipe.source}</p>
            <p>Tags:</p>
            {recipe.tags.map(tag=>(
                <span>{tag}</span>
            ))}
        </div>
    )
}

export default RecipeCard;