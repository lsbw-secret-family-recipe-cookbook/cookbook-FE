import React from "react";
import { connect } from "react-redux";
import { getTitles } from "../actions";
import RecipeCard from "./RecipeCard";

class TagSearch extends React.Component {
  state = {
    customTag: "",
    currentTag: "all"
  };
  componentDidMount() {
    getTitles();
    this.props.titles.map(title => {
      title.tags.map(tag => {
        if (!this.props.uniqueTags.toLowerCase().includes(tag.toLowerCase())) {
          this.props.uniqueTags.push(tag);
        }
      });
    });
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  searchRecipes = tag => {
    if (tag === "all") {
      this.setState({ currentRecipes: this.props.recipes });
    } else {
      const filteredRecipes = this.props.recipes.map(recipe => {
        recipe.tags.includes(tag);
      });
      this.setState({ currentRecipes: filteredRecipes });
    }
  };

  customSearch = (e)=> {
      e.preventDefault();
      this.searchRecipes(this.state.customTag)
  }

  render() {
    return (
      <div className="search-wrapper">
        {this.props.uniqueTags.map(tag => (
          <p>{tag}</p>
        ))}
        <input
          type="text"
          placeholder="Custom Tag"
          name="customTag"
          onChange={this.handleChanges}
          value={this.customTag}
        />
        <button onClick={this.customSearch}>Search by costom tag</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  titles: state.titles,
  fetchingTitles: state.fetchingTitles,
  uniqueTags: state.uniqueTags,
  currentRecipes: state.currentRecipes
});

export default connect(
  mapStateToProps,
  { getTitles }
)(TagSearch);
