import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { useTranslation } from "react-i18next";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "./App.scss";

function App() {
  const { t, i18n } = useTranslation();
  const changeDictionary = (term) => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };
  const Welcome = () => {
    return (
      <span
        className={i18n.language + " lang"}
        onClick={() => {
          changeDictionary("a");
        }}
      >
        {t("Welcome to React")}
      </span>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
          <Route path="/about">
            <About />
          </Route>

          {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
          <Route path="/contact/:id">
            <Contact />
          </Route>
          <Route path="/contact">
            <AllContacts />
          </Route>

          {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  let { id } = useParams();

  return <div>Contact{id.length ? " " + id : ""}</div>;
}

function AllContacts() {
  return <div>all Contact</div>;
}

export default App;
