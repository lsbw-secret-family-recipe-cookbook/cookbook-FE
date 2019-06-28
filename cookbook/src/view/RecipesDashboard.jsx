import React from "react";
import RecipeSidebar from "../components/RecipeSidebar";
import Navigation from "../components/Navigation";
import TagSearch from "../components/TagSearch";

const RecipesDashboard = () => {
  return (
    <div className="dashboard=wrapper">
      <Navigation />
      <TagSearch />
    </div>
  );
};

export default RecipesDashboard;
