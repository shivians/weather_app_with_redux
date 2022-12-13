import axios from "axios";
import Swal from "sweetalert2";

import * as actions from "../actionType/actionType.js";

export const regAction = (data) => async (dispatch) => {
  dispatch({ type: actions.SIGNUP_USERS_REQ });
  const res = await axios
    .post("http://localhost:4000/api/signup", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: actions.SIGNUP_USERS_SUC, payload: res.data });
      localStorage.setItem("userInfo", res.data.token);
      Swal.fire("success!", `${res.data.msg}`);
    })
    .catch((error) => {
      dispatch({
        type: actions.SIGNUP_USERS_FAI,
        payload: error,
      });
      Swal.fire("failed!", `${error.response.data.msg}`);
    });
};

export const getAction = () => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_USERS_REQ });
    await axios.get("http://localhost:4000/api/users").then((res) => {
      dispatch({ type: actions.GET_USERS_SUC, payload: res.data });
    });
  } catch (error) {
    dispatch({ type: actions.GET_USERS_FAI, payload: error });
  }
};

export const logUsers = (user) => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGIN_USERS_REQ });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("http://localhost:4000/api/login", user, config)
      .then((res) => {
        dispatch({ type: actions.LOGIN_USERS_SUC, payload: res.data });
        localStorage.setItem("userInfo", res.data);
        Swal.fire("success!", `${res.data.msg}`);
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: actions.LOGIN_USERS_FAI, payload: error });
    Swal.fire("failed!", `${error.response.data.msg}`);
  }
};
