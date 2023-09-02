// eslint-disable-next-line no-unused-vars
import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Home from "./pages/Home";
// eslint-disable-next-line no-unused-vars
import NotFound from "./pages/NotFound";
import { useLayoutEffect, useState } from "react";
import { createBrowserHistory } from "history";

export default function Router() {
  const history = createBrowserHistory();

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Router>
  );
}
