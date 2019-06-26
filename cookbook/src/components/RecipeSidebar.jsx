import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTitles } from "../actions";

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

            {this.props.titles && this.props.titles.map(title => {
              return (
                <Link to={`/recipes/${title.id}`} key={title.id}>
                  <p>{title.title}</p>
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
  fetchingTitles: state.fetchingTitles
});

export default connect(
  mapStateToProps,
  { getTitles }
)(RecipeSideBar);
