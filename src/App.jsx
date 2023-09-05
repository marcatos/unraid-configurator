import "./App.css";
import React from "react";
// eslint-disable-next-line no-unused-vars
import Router from "./Router";
import Layout from "./Layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}
