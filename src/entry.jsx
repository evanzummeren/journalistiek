import React from "react";
import ReactDOM from 'react-dom';
import "./assets/styling/app.scss";

import App from "./components/App.jsx";
import AppRouter from "./components/Router.jsx";

ReactDOM.render(<AppRouter />, document.getElementById("app"));