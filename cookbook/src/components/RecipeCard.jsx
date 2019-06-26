import React from "react";

const RecipeCard= props => {
    return (
        <div className="recipe-card">
            <h3>{props.recipe.title}</h3>
            <p>From: {props.recipe.source}</p>
            <p>Tags:</p>
             {props.recipe.tags.map(tag=>(
                <span>{tag} </span> 
            ))} 
        </div>
    )
}

export default RecipeCard;