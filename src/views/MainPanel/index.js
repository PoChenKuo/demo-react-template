import React from "react";
import { Route } from "react-router-dom";
import Contact from "../MockPage/Contact";
import About from "../MockPage/About";
import Home from "../MockPage/App";
import AllContacts from "../MockPage/AllContacts";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function MainPanel() {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/contact/:id", name: "Contact", Component: Contact },
    { path: "/contact", name: "Contact", Component: AllContacts },
  ];
  const location = useLocation();

  return (
    <div className="main-panel container">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              location={location}
              in={match !== null}
              timeout={1000}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
}
export default MainPanel;
