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
  FETCH_TITLES_FAILURE,
  FILTER_TITLES
} from "../actions";

const initialState = {
  recipe: null,
  titles: [],
  error: null,
  loading: false,
  loggedIn: false,
  uniqueTags: ["all"],
  currentTitles: [],
  success: false
};

const reducer = (state = initialState, action) => {
  // console.log("ACTION", action);
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        error: null,
        loading: true,
        success: false
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case LOG_IN_START:
      return {
        ...state,
        error: null,
        loading: true,
        success: false
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: true
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case LOG_OUT:
      return {
        initialState
      }
    case FETCH_RECIPE_START:
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        recipe: action.payload,
        success: true
      };
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case ADD_RECIPE_START:
      return {
        ...state,
        error: null,
        loading: true,
        recipes: action.payload,
        success: false
      };
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        recipes: action.payload,
        success: true
      };
    case ADD_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case UPDATE_RECIPE_START:
      return {
        ...state,
        error: null,
        loading: true,
        success: false
      };
    case UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        recipe: action.payload,
        success: true
      };
    case UPDATE_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case DELETE_RECIPE_START:
      return {
        ...state,
        error: null,
        loading: true,
        success: false
      };
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
        error: null,
        success: true
      };
    case DELETE_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case FETCH_TITLES_START:
      return {
        ...state,
        error: null,
        loading: true,
        success: false
      };
    case FETCH_TITLES_SUCCESS:
      const tempUniqueTags = ["all"];
      action.payload.recipes.forEach(title => {
        title.tags.forEach(tag => {
          if (!tempUniqueTags.includes(tag)) {
            tempUniqueTags.push(tag);
          }
        });
      });
      // console.log("payload", action.payload.recipes)
      // console.log("titles", state.titles);
      return {
        ...state,
        titles: action.payload,
        loading: false,
        error: null,
        uniqueTags: tempUniqueTags,
        currentTitles: action.payload.recipes,
        success: true
      };
    case FETCH_TITLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case FILTER_TITLES:
      const tag = action.payload;
      if (tag == "all") {
        return {
          ...state,
          filteredTitles: state.titles.recipes,
          error: null
        };
      } else {
        reducedTitles = state.titles.recipes.filter(recipe =>
          recipe.tags.includes(tag)
        );
        return {
          ...state,
          filteredTitles: reducedTitles,
          error: null,
        };
      }
    case CHECK_STATUS_START:
      return {
        ...state,
        loading: true,
        error: null,
        sucess: false
      };
    case CHECK_STATUS_SUCCESS:
      return {
        loggedIn: action.payload,
        loading: false,
        error: null,
        success: true
      };
    case CHECK_STATUS_FAILURE:
      return {
        loggedIn: false,
        loading: false,
        error: "Unable to authenticate, please log in again",
        success: false
      };

    default:
      return state;
  }
};

export default reducer;
