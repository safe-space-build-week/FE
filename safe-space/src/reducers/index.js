import {
  USER_UNAUTHORIZED,
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions";

const initialState = {
  messages: [],
  user_id: null,
  loggingIn: false,
  deletingMessage: false,
  error: "",
  errorStatusCode: null,
  fetchingMessages: false,
  isRegistering: false,
  addingMessage: false,
  deletingMessage: false,
  token: localStorage.getItem("token")
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingMessages: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingMessages: false,
        messages: action.payload
      };
    case DELETE_START:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        error: "",
        errorStatusCode: null,
        messages: action.payload
      };
    case USER_UNAUTHORIZED:
      console.log(action);
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingMessages: false
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user_id: action.payload.id
      }
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
