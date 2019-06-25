import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions";
import ShowArrayItem from "./ShowArrayItem";

class RecipeForm extends React.Component {
  state = {
    title: "",
    source: "",
    ingredients: [],
    directions: [],
    tags: [],
    note: "",
    ingredientValue: "",
    directionValue: "",
    commonTags: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Dessert",
      "Side",
      "Main",
      "Appetizer",
      "Vegetable",
      "Chicken",
      "Pork",
      "Beef",
      "Quick"
    ]
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  addIngredient = e => {
    e.preventDefault();
    this.setState(state => {
      const ingredients = [...state.ingredients, state.ingredientValue];
      return {
        ingredients,
        ingredientValue: ""
      };
    });
  };

  addDirection = e => {
    e.preventDefault();
    this.setState(state => {
      const directions = [...state.directions, state.directionValue];
      return {
        directions,
        directionValue: ""
      };
    });
  };
  addTagByButton = (e, tag) => {
    e.preventDefault();
    this.setState(state=> {
      const tags = [...state.tags, tag ]
    })
  }

  submitRecipe = e => {
    e.preventDefault();
    const newRecipe = {
      title: this.state.title,
      source: this.state.source,
      ingredients: this.state.ingredients,
      directions: this.state.directions,
      tags: this.state.tags,
      note: this.state.note
    };
    this.props.addRecipe(newRecipe);
  };

  render() {
    return (
      <div className="recipe-form">
        <h2>Create New Recipe</h2>
        <form onSubmit={this.submitRecipe}>
          <input
            placeholder="Title"
            type="text"
            required
            name="title"
            onChange={this.handleChanges}
            value={this.state.title}
          />
          <input
            placeholder="Source"
            type="text"
            name="source"
            onChange={this.handleChanges}
            value={this.state.source}
          />
          <h3>Ingredients</h3>

          <input
            placeholder="Ingredient"
            type="text"
            name="ingredientValue"
            onChange={this.handleChanges}
            value={this.state.ingredientValue}
          />
          <button onClick={this.addIngredient}>Add Ingredient</button>

          {this.state.ingredients.map((ingredient, index) => (
            <ShowArrayItem listNum={index + 1} item={ingredient} />
          ))}

          <h3>Directions</h3>
          <input
            type="text"
            name="directionValue"
            onChange={this.handleChanges}
            value={this.state.directionValue}
            placeholder="Direction"
          />
          <button onClick={this.addDirection}>Plus</button>
          {this.state.directions.map((direction, index) => (
            <ShowArrayItem listNum={index + 1} item={direction} />
          ))}
          <div className="tags">
          {this.state.commonTags.map(tag => {
            return <button onClick={(e)=> this.addTagByButton(e, {tag})}>{tag}</button>
          })}
          </div>
          <h3>Note:</h3>
          <input
            type="text"
            name="note"
            onChange={this.handleChanges}
            value={this.state.note}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingRecipe: state.addingRecipe
});

export default connect(
  mapStateToProps,
  { addRecipe }
)(RecipeForm);

{
  /* Adds input field for editing
          {this.state.ingredients.map((el, index) => {
            return (
              <div className="ingredient" key={index + 1}>
                <input
                  type="text"
                  required
                  value={this.state.ingredient}
                  onChange={e => this.handleMultiInputs(e, index)}
                />
              </div>
            );
          })} */
}
