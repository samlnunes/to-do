import React from "react";
import If from "./If";

function IconButton({ hide, style, onClick, icon }) {
  return (
    <If test={!hide}>
      <button className={"btn btn-" + style} onClick={onClick}>
        <i className={"fa fa-" + icon}></i>
      </button>
    </If>
  );
}

export default IconButton;
