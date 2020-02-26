import React from "react";
import RecipeCards from "../components/RecipeCards";
import Navigation from "../components/Navigation";
import TagSearch from "../components/TagSearch";

const RecipesDashboard = () => {

  return (
    <div className="dashboard=wrapper">
      {console.log("Navigation")}
      <Navigation />
      {console.log("TagSearch")}
      <TagSearch />
      {console.log("RecipeCards")}
      <RecipeCards />
    </div>
  );
};

export default RecipesDashboard;
