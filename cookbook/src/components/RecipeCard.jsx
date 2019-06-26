import React from "react";

const RecipeCard= props => {
    return (
        <div className="recipe-card">
            <h2>{props.recipe.title}</h2>
            <p>From: {props.recipe.source}</p>
            <p>Tags:</p>
             {/* {console.log("RecipeCard", recipe.tags)}  */}
             {props.recipe.tags.map(tag=>(
                <span>{tag} </span> 
            ))} 
        </div>
    )
}

export default RecipeCard;