import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

window.$ = $;

registerServiceWorker();

$(function(){
  //init react component
  ReactDOM.render(<App />,document.getElementById("root"));
});
