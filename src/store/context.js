import { createStore } from "redux";

const inputReducer = (state, action) => {
  if (action.type === "add") {
    return {
      books: [],
      search: "",
      modalShow: false,
    };
  } else if (action.type === "SET") {
    return {
      books: action.value,
      search: "",
      modalShow: false,
    };
  } else if (action.type === "SEARCH") {
    console.log(action.value);
    return {
      ...state,
      books: state.books,
      search: action.value,
    };
  } else if (action.type === "MODAL") {
    console.log(action.value);
    return {
      ...state,
      modalShow: action.value,
    };
  }
  return state;
};

const store = createStore(inputReducer, {
  books: [],
  search: "",
  modalShow: false,
});

export default store;
