import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTitles } from "../actions";
import "../less/RecipeCards.less";

class RecipeSideBar extends React.Component {
  componentDidMount() {
    this.props.getTitles();
  }

  render() {
    return (
      <div>
        {this.props.fetchingTitles ? (
          <p>Loading...</p>
        ) : (
            <div>
              <p>Recipe Sidebar</p>
              {this.props.titles &&
                this.props.titles.map(title => {
                  return (
                    <Link to={`/recipes/view/${title.id}`} key={title.id}>
                      <div className="recipe-card">
                        <h3>{title.title}</h3>
                        <p>Source: {title.source}</p>
                        <div className="recipe-card-tags">
                          {title.tags.map(tag => (
                            <p className="tag">{tag} </p>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  titles: state.titles.recipes,
  fetchingTitles: state.fetchingTitles,
  titlesOnly: state.titlesOnly
});

export default connect(
  mapStateToProps,
  { getTitles }
)(RecipeSideBar);

// return (
//   <div className="recipe-card">
//     <h3>{props.recipe.title}</h3>
//     <p>Source: {props.recipe.source}</p>
//     <div className="recipe-card-tags">
//       {/* <span>Tags:</span> */}
//       {props.recipe.tags.map(tag => (
//         <p className="tag">{tag} </p>
//       ))}
//     </div>
//   </div>
// );
