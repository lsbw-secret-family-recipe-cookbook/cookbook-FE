import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";

import LoginPage from "./view/LoginPage";
import SignUpPage from "./view/SignUpPage";
import AddRecipe from "./view/AddRecipe";
import RecipesDashboard from "./view/RecipesDashboard";
// import SingleRecipe from "./view/SingleRecipe";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
         <Route path="/recipes" component={RecipesDashboard} />
         {/* <Route path="/recipes/:id" component={SingleRecipe} />  */}
        <Route path="/add-recipe" component={AddRecipe} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
