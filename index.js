/* global module */
import React from "react";
import { render } from "react-dom";

const root = document.getElementById("root");

function renderApp() {
  const App = require("./App").default;
  render(<App />, root);
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}