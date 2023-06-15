/* En esta línea, estás importando la función createStore de la biblioteca redux. Esta función se utiliza para crear el almacenamiento de Redux, que almacenará el estado global de tu aplicación. */
import { createStore } from "redux";


// Define los tipos de acción /* Aquí defines un objeto llamado actionTypes, que enumera los tipos de acciones que tu aplicación puede disparar. En este caso, solo hay un tipo de acción llamado "SET_USER_DATA". */
const actionTypes = {
  /* SET_USER_DATA: "SET_USER_DATA" */
  ADD_USER: "ADD_USER",
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT"
};

// Define el estado inicial/* Aquí defines el estado inicial de tu aplicación. En este caso, el estado inicial tiene una propiedad llamada userData que está inicializada como un array vacío []. */
const initialState = {
  userData: [],
  isLoggedIn: false,
};

// Define el reducer /* Aquí defines el reductor, que es una función que especifica cómo cambia el estado global en respuesta a las acciones. El reductor toma dos parámetros: state, que representa el estado actual, y action, que contiene la acción desencadenada.Dentro del reductor, utilizas un bloque switch para manejar diferentes tipos de acciones. En este caso, solo tienes un caso para el tipo de acción "SET_USER_DATA". Cuando se dispara esa acción, se crea un nuevo objeto de estado utilizando el operador spread ...state para copiar el estado actual y luego se actualiza la propiedad userData con el valor de action.payload. action.payload representa los datos que se pasan junto con la acción.Si la acción no coincide con ningún caso, simplemente se devuelve el estado actual sin cambios. */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        userData: [...state.userData, action.payload ]
      };
      case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
        };
        case actionTypes.LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
          };
    default:
      return state;
  }
};

// Crea el store de Redux /* Aquí creas el almacenamiento de Redux utilizando la función createStore y pasando el reductor que has definido. Esto crea una instancia del almacenamiento de Redux que contiene tu estado global y maneja las actualizaciones del estado en función de las acciones. */
const store = createStore(reducer);


/* Finalmente, exportas el almacenamiento store y los tipos de acciones actionTypes para que puedan ser importados en otros archivos de tu proyecto y utilizados en tus componentes de React */
export { store, actionTypes };



   //Reducer para manejar el estado y actualizar el valor de la propiedad isLoggedIn en el estado global: 
/* 
   const initialState = {
    isLoggedIn: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, isLoggedIn: true };
      default:
        return state;
    }
  }; */