// eslint-disable-next-line no-unused-vars
import { Route, Routes, Router as ReactRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Home from "./pages/Home";
// eslint-disable-next-line no-unused-vars
import NotFound from "./pages/NotFound";
import { useLayoutEffect, useState } from "react";
import { createBrowserHistory } from "history";

export default function Router(props) {
  const history = createBrowserHistory();

  const { children } = props;

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
        <Route exact path="/" element={<Home>{children}</Home>} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </ReactRouter>
  );
}
