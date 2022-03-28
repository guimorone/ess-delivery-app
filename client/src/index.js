import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
=======
import store from "./store";
import { Provider } from "react-redux";
>>>>>>> c6f80577ae489ae8e689affb6f264b9151e8eb27

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
