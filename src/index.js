import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
/* import { AppContextProvider } from "./context/AppContext"; */
import { store } from './redux/store';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Provider store={store}>
  <React.StrictMode>
    {/* <AppContextProvider> */}
      <App />
    {/* </AppContextProvider> */}
  </React.StrictMode>
    </Provider> 
)
