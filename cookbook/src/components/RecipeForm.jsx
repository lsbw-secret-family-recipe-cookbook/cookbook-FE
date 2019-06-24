import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions";

class RecipeForm extends React.Component {
  state = {
    title: "",
    source: "",
    ingredients: [],
    ingredientID: 0,
    directions: [],
    directionsID: 0,
    tags: [],
    tagsID: 0,
    notes: ""
  };

  handleChanges = e => {
      e.persist();
      this.setState({
        prevState => ({...prevState,
            [e.target.name]:e.target.value
        })
      })
  }

  render() {
    return (
      <div className="recipe-form">
        <h2>Create New Recipe</h2>
        <form>
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
        </form>
      </div>
    );
  }
}
