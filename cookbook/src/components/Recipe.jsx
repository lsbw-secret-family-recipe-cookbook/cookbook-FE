import React from "react";
import { connect } from "react-redux";
import ShowArrayItem from "./ShowArrayItem";

class Recipe extends React.Component {
  render() {
    return (
      <div className="recipe">
        <h2>{this.props.recipe.title}</h2>
        <p>Source: {this.props.recipe.source}</p>
        <h3>Tags</h3>
        <div className="tags">
          {this.props.recipes.tags.map(tag => {
            <p>{tag}</p>;
          })}
        </div>
        <h3>Ingredients</h3>
        {this.props.recipes.ingredients.map((ingredient, index) => {
          <ShowArrayItem listNum={index + 1} item={ingredient} key={index} />;
        })}
        <h3>Directions</h3>
        {this.props.recipes.instructions.map((istruction, index) => {
          <ShowArrayItem listNum={index + 1} item={instruction} key={index} />;
        })}
        <h3>Note</h3>
        <p>{this.props.recipes.notes}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(
    mapStateToProps
)(Recipe)
