import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import genereteStore from "./redux/store";
import { Provider } from "react-redux";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnJQrWhtokiDeN4scW9NZQ19OFN2x3tcw",
  authDomain: "hotel-menu-4ef42.firebaseapp.com",
  projectId: "hotel-menu-4ef42",
  storageBucket: "hotel-menu-4ef42.appspot.com",
  messagingSenderId: "666822272250",
  appId: "1:666822272250:web:9831484555543e03e11543",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// import "bootstrap/dist/css/bootstrap.min.scss";
const store = genereteStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
