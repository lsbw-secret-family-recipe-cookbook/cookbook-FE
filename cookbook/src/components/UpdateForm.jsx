import React from "react";
import { connect } from "react-redux";
import { getRecipe, updateRecipe } from "../actions";

class UpdateForm extends React.Component {
  state = {
    recipe: {
      title: this.props.recipe.title,
      source: this.props.recipe.source,
      ingredients: { ...this.props.ingredients },
      directions: { ...this.props.instructions },
      note: this.props.recipe.title,
      tags: { ...this.props.recipe.tags }
    }
  };
  componentDidMount() {
    // const storedRecipe = localStorage.getItem(this.props.recipe.id);
    // this.setState({ recipe: JSON.parse(storedRecipe) });
    // if (this.props.recipe) {
    //   // this.props.getRecipe(this.props.recipe)
    // }
    console.log("1", this.props);
    console.log("2", this.props.recipe);
  }

  handleChanges = e => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [e.target.name]: e.target.value
      }
    });
  };
  updateRecipe = (e, recipeID, updatedRecipe) => {
    e.preventDefault();
    this.props.updateRecipe(recipeID, updatedRecipe);
    this.setState({
      recipe: {
        title: this.props.recipe.title || "",
        source: this.props.recipe.source || "",
        ingredients: { ...this.props.ingredients } || {},
        directions: { ...this.props.instructions } || {},
        note: this.props.recipe.title || "",
        tags: { ...this.props.recipe.tags } || {}
      }
    });
  };

  render() {
    if (this.props.fetchingRecipe || !this.props.recipe) {
      return <h2>Loading Recipe for Update Form...</h2>;
    } else {
      return (
        <div className="update-form">
          {console.log(this.props.recipe)}
          <h2>Update Recipe</h2>
        <h3>Title:</h3>
        <input
          type="text"
          name="title"
          onChange={this.handleChanges}
          value={this.props.recipe.title}
        />
        <h3>Source:</h3>
        <input
          type="text"
          name="source"
          onChange={this.handleChanges}
          value={this.props.recipe.source}
        />
        <h3>Tags:</h3>
          {this.props.recipe.tags.map((tag, index) => (
          <input
            type="text"
            name={`tag${index}`}
            value={tag}
            onChange={this.handleArrayChange}
            key={`t${index}`}
          />
        ))}
        <h3>Ingredients:</h3>
        {this.props.ingredients.map((ingredient, index) => (
          <input
            type="text"
            name={`ingredient${index}`}
            value={ingredient}
            onChange={this.handleArrayChange}
            key={`d${index}`}
          />
        ))}
        <h3>Directions:</h3>
        {this.props.instructions.map((direction, index)=> (
            <input
            type="text"
            name={`direction${index}`}
            value={direction}
            key={`d${index}`}
            />
        ))}
          <h3>Notes:</h3>
          <input
            type="text"
            name="notes"
            value={this.state.note}
            />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { updateRecipe, getRecipe }
)(UpdateForm);
