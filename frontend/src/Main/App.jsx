import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import "../Template/custom.css";

import React from "react";
import Routes from "./routes";
import Menu from "../template/menu";

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
