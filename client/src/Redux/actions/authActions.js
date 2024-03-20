import axios from "axios";
import { ERRORS, SET_USER } from "../types";
import { jwtDecode } from "jwt-decode";
export const login = (form) => (dispatch) => {
  axios
    .post("/api/login", form)
    .then((response) => {
      const Token = response.data.token;
      localStorage.setItem("jwt", Token);
      const decoded = jwtDecode(Token);
      dispatch({
        type: SET_USER,
        payload: decoded,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload:
          err && err.response && err.response.data ? err.response.data : {},
      });
    });
};
export const Registration =(form, Navigate)=>(dispatch)=>{
  axios
    .post("/api/register", form)
    .then((res) => {
      Navigate("/login");
      dispatch({
        type: ERRORS,
        payload: {},
      });
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    });
};
