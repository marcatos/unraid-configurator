import "./App.css";
import Home from "./pages/Home";

import { Route, Router, Routes } from "react-router-dom";
import React, { useLayoutEffect, useState } from "react";
import { createBrowserHistory } from "history";
import NotFound from "./pages/NotFound";
// create an App component with a react-router-dom Switch

export default function App() {
  const history = createBrowserHistory();

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <div className="App">
      <Router location={state.location} navigationType={state.action} navigator={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
