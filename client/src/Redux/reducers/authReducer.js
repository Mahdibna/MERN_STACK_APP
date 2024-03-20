import { SET_USER } from "../types";

const initialState = {
  isConnected: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isConnected: !Object.keys(action.payload).length == 0,
        user: action.payload,
      };
    default:
      return state;
  }
}
