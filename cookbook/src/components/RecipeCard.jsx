import React from "react";

const RecipeCard= props => {
    return (
        <div className="recipe-card">
            <h3>{props.recipe.title}</h3>
            <p>Source: {props.recipe.source}</p>
            {/* <span>Tags:</span> */}
             {props.recipe.tags.map(tag=>(
                <span className="tag">{tag} </span> 
            ))} 
        </div>
    )
}

export default RecipeCard;