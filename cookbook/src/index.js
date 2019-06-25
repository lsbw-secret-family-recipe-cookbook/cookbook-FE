import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
// import App from "./App";
// import LoginPage from "./view/LoginPage";
// import SignUpPage from "./view/SignUpPage";
import RecipeForm from "./components/RecipeForm";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RecipeForm/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
