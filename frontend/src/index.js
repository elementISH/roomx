import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./scss/main.scss";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import roomsReducer, { roomsFetch } from "./slices/roomsSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import { dataApi } from "./slices/dataApi";

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cart: cartReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
});

store.dispatch(roomsFetch());
store.dispatch(getTotals());

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
