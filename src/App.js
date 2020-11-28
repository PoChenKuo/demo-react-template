import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { useTranslation } from "react-i18next";

import { Switch, Route, useParams } from "react-router-dom";
import "@src/App.scss";
import axios from "axios";

const Welcome = () => {
  const { t, i18n } = useTranslation();
  const changeDictionary = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };
  return (
    <span
      className={i18n.language + " lang"}
      onClick={() => {
        changeDictionary("a", i18n);
      }}
    >
      {t("Welcome to React")}
    </span>
  );
};

const getAxiosEntity = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://cdnjs.cloudflare.com/ajax/libs/jquery-jsonview/1.2.3/jquery.jsonview.min.css"
      )
      .then((rv) => {
        console.log(rv);
        resolve(rv);
      });
  });
};
function App() {
  getAxiosEntity().then((x) => console.log(x));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload. return{" "}
        </p>
        <Welcome />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default React.memo(App);
