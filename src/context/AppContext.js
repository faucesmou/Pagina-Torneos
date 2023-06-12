import React, { createContext, useContext, useReducer } from "react";
import { store, actionTypes } from "../redux/store";
import { reducer, initialState } from "../redux/store";

// Crea el contexto
const AppContext = createContext();

// Define el proveedor del contexto
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  // Define las acciones
  const setUserData = (userData) => {
    dispatch({
      type: actionTypes.SET_USER_DATA,
      payload: userData,
    });
  };

  // Puedes agregar más acciones si es necesario

  // Pasa el estado y las acciones al value del contexto
  const contextValue = {
    state,
    actions: {
      setUserData,
      // Puedes agregar más acciones si es necesario
    },
  };

  // Retorna el proveedor del contexto
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Define el hook useContext personalizado
const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };

/* ESTO NO SE ESTÁ USANDO FUE UNA SUGERENCIA PREVIA QUE AL FINAL NO TOMÉ 
si ya estás utilizando Redux para crear un estado global en tu proyecto, es posible que no necesites utilizar el Context de React adicionalmente ya que Redux te proporciona una solución para compartir y manipular el estado global de manera eficiente.*/