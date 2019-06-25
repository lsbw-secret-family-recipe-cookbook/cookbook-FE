import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  FETCH_RECIPE_START,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  UPDATE_RECIPE_START,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAILURE,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  FETCH_TITLES_START,
  FETCH_TITLES_SUCCESS,
  FETCH_TITLES_FAILURE
} from "../actions";

const initialState = {
  recipes: [],
  titles:[],
  error: null,
  signingUp: false,
  loggingIn: false,
  fetchingRecipes: false,
  addingRecipe: false,
  updatingRecipe: false,
  deletingRecipe: false,
  fetchingTitles: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        error: null,
        signingUp: true
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        signingUp: false
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        signingUp: null
      };
    case LOG_IN_START:
      return {
        ...state,
        error: null,
        loggingIn: true
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        error: null,
        loggingIn: false
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false
      };
    case FETCH_RECIPE_START:
      return {
        ...state,
        fetchingRecipes: true,
        error: null
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingRecipes: false,
        recipes: action.payload
      };
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingRecipes: false
      };
    case ADD_RECIPE_START:
      return {
        ...state,
        error: null,
        addingRecipe: true,
        recipes: action.payload
      };
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        addingRecipe: false,
        recipes: action.payload
      };
    case ADD_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingRecipe: false
      };
    case UPDATE_RECIPE_START:
      return {
        ...state,
        error: null,
        updatingRecipe: true
      };
    case UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        updatingRecipe: false,
        recipes: action.payload
      };
    case UPDATE_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingRecipe: false
      };
    case DELETE_RECIPE_START:
      return {
        ...state,
        error: null,
        deletingRecipe: true
      };
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        deletingRecipe: false,
        error: null
      };
    case DELETE_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingRecipe: false
      };
      case FETCH_TITLES_START:
      return {
        ...state,
        error: null,
        fetchingTitles: true,
      }
      case FETCH_TITLES_SUCCESS:
      return {
        ...state,
        titles: action.payload,
        fetchingTitles: false,
        error: null
      }
      case FETCH_TITLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingTitles: false
      }
    default:
      return state;
  }
};

export default reducer;
