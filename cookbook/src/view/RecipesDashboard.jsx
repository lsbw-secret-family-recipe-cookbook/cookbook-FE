import React from "react";
import Navigation from "../components/Navigation";
import TagSearch from "../components/TagSearch";

const RecipesDashboard = () => {
  return (
    <div className="dashboard=wrapper">
      <Navigation />
      {console.log("RecipeSidebar")}
      <TagSearch />
      {console.log("after")}
    </div>
  );
};

export default RecipesDashboard;
