import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "swiper/css";
import { store } from "./context/store.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
  </React.StrictMode>
);
