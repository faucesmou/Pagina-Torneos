import { createStore } from "redux";

// Define los tipos de acción
const actionTypes = {
  SET_USER_DATA: "SET_USER_DATA",
};

// Define el estado inicial
const initialState = {
  userData: {},
};

// Define el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

// Crea el store de Redux
const store = createStore(reducer);

export { store, actionTypes };
