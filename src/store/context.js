import { createStore } from "redux";

const inputReducer = (state, action) => {
  if (action.type === "add") {
    return {
      books: [],
      search: "",
    };
  } else if (action.type === "SET") {
    return {
      books: action.value,
      search: "",
    };
  }
  return state;
};

const store = createStore(inputReducer, {
  books: [],
  search: "",
});

export default store;
