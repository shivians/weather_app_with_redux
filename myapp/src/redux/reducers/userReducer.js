import {
  SIGNUP_USERS_SUC,
  SIGNUP_USERS_FAI,
  SIGNUP_USERS_REQ,
  GET_USERS_SUC,
  GET_USERS_REQ,
  GET_USERS_FAI,
  LOGIN_USERS_REQ,
  LOGIN_USERS_SUC,
  LOGIN_USERS_FAI,
} from "../actionType/actionType";

const user = localStorage.getItem('userInfo');
const initialState = {
  userRegister: [],
  isAuth:user ? true : false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USERS_REQ:
      return {
        loading: true,
        userRegister: [],
      };

    case SIGNUP_USERS_SUC:
      return {
        loading: false,
        userRegister: action.payload,
      };

    case SIGNUP_USERS_FAI:
      return {
        loading: false,
        error: action.payload,
      };

    case LOGIN_USERS_REQ:
      return {
        loading: true,
        auth: [],
      };

    case LOGIN_USERS_SUC:
      return {
        loading: false,
        auth: action.payload,
      };

    case LOGIN_USERS_FAI:
      return {
        loading: true,
        auth: [action.payload],
      };

    case GET_USERS_REQ:
      return {
        loading: true,
        users: [],
      };

    case GET_USERS_SUC:
      return {
        loading: false,
        users: action.payload,
      };

    case GET_USERS_FAI:
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
