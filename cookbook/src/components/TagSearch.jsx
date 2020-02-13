import React from "react";
import { connect } from "react-redux";
import { getTitles, filterRecipes } from "../actions";

class TagSearch extends React.Component {
  state = {
    currentTag: "all",
  };

  componentDidMount() {
    this.props.getTitles();
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.titles !== this.props.titles) {
  //     this.setState({
  //       currentTitles: [...this.props.titles]
  //     })
  //   }
  // };

  searchRecipes = (e, selectedTag) => {
    e.preventDefault();
    this.setState({currentTag: selectedTag})
    this.props.filterRecipes(selectedTag)
  };


  render() {
    if (!this.props.titles) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="search-wrapper">
          {console.log(this.props.uniqueTags)}
          {this.props.uniqueTags.map((tag, index) => (
            <button onClick={e => this.searchRecipes(e, tag)} key={`t${index}`}>
              {tag}
            </button>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  titles: state.titles.recipes,
  fetchingTitles: state.fetchingTitles,
  uniqueTags: state.uniqueTags,
  currentTitles: state.currentTitles
});

export default connect(
  mapStateToProps,
  { getTitles, filterRecipes }
)(TagSearch);
