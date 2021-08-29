import { createStore } from "redux";

const inputReducer = (state, action) => {
  if (action.type === "ADD") {
    let newBook = {
      id: Date.now(),
      volumeInfo: {
        title: action.value.titleInputValue,
        authors: [action.value.authorInputValue],
        publisher: action.value.publisherInputValue,
        publishedDate: action.value.publishedDateInputValue,
      },
    };
    let bookArray = [...state.books];
    bookArray.unshift(newBook);

    return {
      books: bookArray,
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
    return {
      ...state,
      books: state.books,
      search: action.value,
    };
  } else if (action.type === "MODAL") {
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
