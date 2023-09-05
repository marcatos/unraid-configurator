// eslint-disable-next-line no-unused-vars
import { Route, Routes, Router as ReactRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Home from "./pages/Home";
// eslint-disable-next-line no-unused-vars
import NotFound from "./pages/NotFound";
import { useLayoutEffect, useState } from "react";
import { createBrowserHistory } from "history";
import Arrs from "./pages/Arrs";

export default function Router() {
  const history = createBrowserHistory();

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <ReactRouter
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path={"arrs"}>
          <Route index element={<Arrs>arrs</Arrs>} />
          <Route path="setup" element={<Arrs>setup</Arrs>} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </ReactRouter>
  );
}
