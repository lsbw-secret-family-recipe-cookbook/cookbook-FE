import React from "react";
import { connect } from "react-redux";
import { getTitles } from "../actions";
import RecipeCards from "./RecipeCards";

class TagSearch extends React.Component {
  state = {
    currentTag: "all",
    currentRecipes: []
  };

  componentDidMount() {
    getTitles();
    if (this.props.titles) {
      this.setState({
        currentRecipes: this.props.titles
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.titles !== this.props.titles) {
      this.setState({
        currentRecipes: [...this.props.titles]
      })
    }
  };

  searchRecipes = (e, selectedTag) => {
    e.preventDefault();
    if (selectedTag === "all") {
      this.setState({
        currentRecipes: [...this.props.titles]
      });
    } else {
      const filteredRecipes = [];
      this.props.titles.forEach(recipe => {
        if (recipe.tags.includes(selectedTag)) {
          filteredRecipes.push(recipe);
        }
      });
      this.setState({ currentRecipes: [...filteredRecipes] });
    }
  };

  customSearch = e => {
    e.preventDefault();
    this.searchRecipes(this.state.customTag);
  };

  render() {
    if (!this.props.titles) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="search-wrapper">
        {this.props.uniqueTags.map((tag, index) => (
          <button onClick={e => this.searchRecipes(e, tag)} key={`t${index}`}>
            {tag}
          </button>
        ))}
        <RecipeCards recipes={this.state.currentRecipes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  titles: state.titles.recipes,
  fetchingTitles: state.fetchingTitles,
  uniqueTags: state.uniqueTags,
});

export default connect(
  mapStateToProps,
  { getTitles }
)(TagSearch);
