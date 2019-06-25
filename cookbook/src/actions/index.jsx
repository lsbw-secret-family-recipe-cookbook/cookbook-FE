import axios from "axios";
import { axiosWithAuth } from "../util/axiosWithAuth";

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = () => dispatch => {};

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
//this one is not right/needs work
export const logIn = credentials => dispatch => {
  dispatch({ type: LOG_IN_START });
  axios
    .post("PLACEHOLDER", credentials)
    .then(res => {
      dispatch({ type: LOG_IN_SUCCESS });
      localStorage.setItem("token", res.data.payload);
      return true;
    })
    .catch(err => {
      dispatch({ type: LOG_IN_FAILURE, payload: err });
      return false;
    });
};

export const FETCH_RECIPE_START = "FETCH_RECIPE_START";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const getRecipe = () => dispatch => {
  dispatch({ type: FETCH_RECIPE_START });
  axiosWithAuth()
    .get("PLACEHOLDER")
    .then(res => {
      dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: FETCH_RECIPE_FAILURE, payload: err });
    });
};

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const addRecipe = newRecipe => dispatch => {
  dispatch({ type: ADD_RECIPE_START });
  axiosWithAuth()
    .post("PLACEHOLDER", newRecipe)
    .then(res => {
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: ADD_RECIPE_FAILURE, payload: err });
    });
};

export const UPDATE_RECIPE_START = "EDIT_RECIPE_START";
export const UPDATE_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const UPDATE_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

export const updateRecipe = updatedRecipe => dispatch => {
  dispatch({ type: UPDATE_RECIPE_START });
  axiosWithAuth()
    .put("PLACEHOLDER", updatedRecipe)
    .then(res => {
      dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err });
    });
};

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

export const deleteRecipe = recipeID => dispatch => {
  dispatch({ type: FETCH_RECIPE_START });
  axiosWithAuth()
    .delete(`PLACEHOLDER/${recipeID}`)
    .then(res => {
      dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: FETCH_RECIPE_FAILURE, payload: err });
    });
};

