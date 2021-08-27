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
  } else if (action.type === "SEARCH") {
    console.log(action.value);
    return {
      books: state.books,
      search: action.value,
    };
  }
  return state;
};

const store = createStore(inputReducer, {
  books: [],
  search: "",
});

export default store;
