import { INCREMENT, DECREMENT } from "./constants";

export const increment = payload => {
  return {
    type: INCREMENT,
    payload
  };
};

export const decriment = payload => {
  return {
    type: DECREMENT,
    payload
  };
};
