import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions";

class RecipeForm extends React.Component {

  handleChanges = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  addArrayItem = (e, arrayType) => {
    e.preventDefault();
    this.setState(state => {
      const arrayType = [...state.arrayType, state.value];
      return {
        arrayType,
        value: ""
      };
    });
  };

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
            value={this.propsrecipeToAdd.title}
          />
          <input
            placeholder="Source"
            type="text"
            name="source"
            onChange={this.handleChanges}
            value={this.propsrecipeToAdd.source}
          />
          <h3>Ingredients</h3>
          <div className="ingredient">
            <input
              placeholder="Ingredient"
              type="text"
              name="value"
              onChange={this.handleChanges}
              value={this.props.recipeToAdd.value}
            />
          </div>

          <button onClick={(e)=>this.addArrayItem(e, "ingredients")}>Add Ingredient</button>
          <h3>Directions</h3>
          <input
            type="text"
            name="direction"
            onChange={this.handleChanges}
            value={this.props.recipeToAdd.value}
          />
          <button>Plus</button>
          <h3>Note:</h3>
          <input
            type="text"
            name="note"
            onChange={this.handleChanges}
            value={this.props.recipeToAdd.note}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingRecipe: state.addingRecipe,
  recipeToAdd: state.RecipeToAdd
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
