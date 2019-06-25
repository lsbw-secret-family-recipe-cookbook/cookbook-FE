import React from "react";
import RecipesSidebar from "../components/RecipeSidebar";
import Navigation from "../components/Navigation";
import TagSearch from "../components/TagSearch";

const RecipesDashboard = () => {
  return (
    <div className="dashboard=wrapper">
      <Navigation />
      <TagSearch />
      <RecipesSidebar />
    </div>
  );
};

export default RecipesDashboard;
