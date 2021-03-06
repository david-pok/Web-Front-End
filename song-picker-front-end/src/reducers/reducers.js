import {
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL
} from "../actions/SigninAction";
import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL
} from "../actions/FetchUserAction";
import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/SignupAction";
import {
  SUGGEST_FAIL,
  SUGGEST_START,
  SUGGEST_SUCCESS
} from "../actions/SuggestAction";

import {
  SUGGEST_LEAST_FAIL,
  SUGGEST_LEAST_START,
  SUGGEST_LEAST_SUCCESS
} from "../actions/SuggestLeastAction";

import {
  FETCH_FAVES_START,
  FETCH_FAVES_SUCCESS,
  FETCH_FAVES_FAIL
} from "../actions/FetchFavesAction";

import {
  ADD_FAVES_START,
  ADD_FAVES_SUCCESS,
  ADD_FAVES_FAIL
} from "../actions/AddFavesAction";

import {
  DELETE_FAVES_START,
  DELETE_FAVES_SUCCESS,
  DELETE_FAVES_FAIL
} from "../actions/DeleteFavesAction";

import {
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL
} from "../actions/EditProfileAction";

const initialState = {
  user: {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  },
  users: [],
  faves: [],

  suggested: [],
  least: null,
  isLoading: false,
  error: null,
  editing: false
};

export const reducers = (state = initialState, action) => {
  // console.log("reducer action", action);

  switch (action.type) {
    //SIGNUP REDUCER
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //SIGNIN REDUCER
    case SIGNIN_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: ""
      };

    //FETCH USER
    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: ""
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //SONG SUGGESTIONS
    case SUGGEST_START:
      return {
        ...state,
        isLoading: true,
        least: null,
        error: ""
      };
    case SUGGEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suggested: action.payload,
        error: ""
      };
    case SUGGEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //LEAST LIKELY SUGGESTION:
    case SUGGEST_LEAST_START:
      return {
        ...state,
        isLoading: true,
        suggested: [],
        error: ""
      };
    case SUGGEST_LEAST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        least: action.payload,
        error: ""
      };
    case SUGGEST_LEAST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.paylaod
      };

    //ADD FAVES
    case ADD_FAVES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case ADD_FAVES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        faves: [...state.faves, action.payload],
        error: ""
      };
    case ADD_FAVES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //DELETE FAVES
    case DELETE_FAVES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case DELETE_FAVES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        faves: state.faves.filter(fave => fave.id !== action.payload),
        error: ""
      };
    case DELETE_FAVES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //FETCH FAVES
    case FETCH_FAVES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_FAVES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        faves: action.payload,
        error: ""
      };
    case FETCH_FAVES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //EDIT PROFILE
    case EDIT_PROFILE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: ""
      };
    case EDIT_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
