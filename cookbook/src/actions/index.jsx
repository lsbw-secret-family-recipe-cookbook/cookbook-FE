import axios from "axios";
import { axiosWithAuth } from "../util/axiosWithAuth";

const URL = "https://secret-cookbook.herokuapp.com"
// const URL = "https://localhost:4000"

export const CHECK_STATUS_START = "CHECK_STATUS_START";
export const CHECK_STATUS_SUCCESS = "CHECK_STATUS_SUCCESS";
export const CHECK_STATUS_FAILURE = "CHECK_STATUS_FAILURE"
export const checkStatus = () => dispatch=> {
  dispatch({type: CHECK_STATUS_START});
  axiosWithAuth()
    .post(
      `/auth/authenticate`)
      .then(res => {
        dispatch({type: CHECK_STATUS_SUCCESS, payload: res.data})
      })
      .catch(err=> {
        console.log(err)
        dispatch({type: CHECK_STATUS_FAILURE, payload: err})
      })
}

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = (credentials, history) => dispatch => {
  const creds = { email: credentials.email, password: credentials.password }
  // const fakeCreds = {email: "Shannon1", password: "123456789"}
  dispatch({ type: SIGN_UP_START });
  axios
    .post(
      `${URL}/auth/register`,
      creds
    )
    .then(res => {
      // console.log("RES", res)
      dispatch({ type: SIGN_UP_SUCCESS });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        history.push('/');
      } else { //in case token is not returned for some reason
        credentials.history.push('/log-in');
      }
      return true;
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: SIGN_UP_FAILURE, payload: err });
      return false;
    });
};

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const logIn = (credentials, history) => dispatch => {
  dispatch({ type: LOG_IN_START });
  axios
    .post(
      `${URL}/auth/login`,
      credentials
    )
    .then(res => {
      dispatch({ type: LOG_IN_SUCCESS });
      localStorage.setItem("token", res.data.token);
      history.push('/');
      return true;
    })
    .catch(err => {
      dispatch({ type: LOG_IN_FAILURE, payload: err });
      return false;
    });
};

export const LOG_OUT = "LOG_OUT"

export const logOut = ()=> dispatch => {
  dispatch({type: LOG_OUT});
}

export const FETCH_RECIPE_START = "FETCH_RECIPE_START";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const getRecipe = recipeID => dispatch => {
  dispatch({ type: FETCH_RECIPE_START });
  axiosWithAuth()
    .get(`/recipes/${recipeID}`)
    .then(res => {
      dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data.recipe });
    })
    .catch(err => {
      dispatch({ type: FETCH_RECIPE_FAILURE, payload: err });
    });
};

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const addRecipe = (newRecipe, history) => dispatch => {
  dispatch({ type: ADD_RECIPE_START });
  axiosWithAuth()
    .post("/recipes", newRecipe)
    .then(res => {
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data });
      const recipe_id = res.data[res.data.length - 1].id
      history.push(`/recipes/view/${recipe_id}`)
    })
    .catch(err => {
      dispatch({ type: ADD_RECIPE_FAILURE, payload: err });
    });
};

export const UPDATE_RECIPE_START = "EDIT_RECIPE_START";
export const UPDATE_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const UPDATE_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

export const updateRecipe = (recipeID, updatedRecipe, history) => dispatch => {
  dispatch({ type: UPDATE_RECIPE_START });
  axiosWithAuth()
    .put(`/recipes/${recipeID}`, updatedRecipe)
    .then(res => {
      dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data });
      const recipe_id = res.data.id
      history.push(`/recipes/view/${recipe_id}`)
    })
    .catch(err => {
      dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err });
    });
};

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

export const deleteRecipe = (recipeID, history) => dispatch => {
  dispatch({ type: DELETE_RECIPE_START });
  axiosWithAuth()
    .delete(`/recipes/${recipeID}`)
    .then(res => {
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
      history.push('/');
    })
    .catch(err => {
      dispatch({ type: DELETE_RECIPE_FAILURE, payload: err });
    });
};

export const FETCH_TITLES_START = "FETCH_TITLES_START";
export const FETCH_TITLES_SUCCESS = "FETCH_TITLES_SUCCESS";
export const FETCH_TITLES_FAILURE = "FETCH_TITLES_FAILURE";

export const getTitles = (string) => dispatch => {
  console.log("string in actions", string)
  dispatch({ type: FETCH_TITLES_START });
  axiosWithAuth()
    .get(`/recipes`)
    .then(res => {
      dispatch({ type: FETCH_TITLES_SUCCESS, payload: res.data });
      if (res.data.status == 404) {
        console.log("404 res.data", res.data)
      }
    })
    .catch(err => {
      dispatch({ type: FETCH_TITLES_FAILURE, payload: err });
    });
};

export const FILTER_TITLES = "FILTER_TITLES"

export const filterRecipes = selectedTag=> dispatch=> {
  dispatch({type: FILTER_TITLES, payload: selectedTag});
}