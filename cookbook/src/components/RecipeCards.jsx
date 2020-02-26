import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTitles } from "../actions";
import "../less/RecipeCards.less";

class RecipeCards extends React.Component {
  componentDidMount() {
    this.props.getTitles("this string");
  }
  render() {
    if (!this.props.currentTitles || this.props.loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="recipe-cards-wrapper">
        {console.log("this", typeof this.props.currentTitles)}
          {this.props.currentTitles.map(title => {
            return (
              <div className="recipe-card">
                <Link to={`/recipes/view/${title.id}`} key={title.id}>
                  <h3>{title.title}</h3>
                  <p>Source: {title.source}</p>
                  <div className="recipe-card-tags">
                    {title.tags.map(tag => (
                      <p className="tag">{tag} </p>
                    ))}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  titles: state.titles.recipes,
  loading: state.loading,
  currentTitles: state.currentTitles});

export default connect(
  mapStateToProps,
  { getTitles }
)(RecipeCards);

