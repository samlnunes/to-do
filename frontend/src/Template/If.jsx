import React from "react";

function If({ test, children }) {
  if (test) {
    return children;
  } else {
    return false;
  }
}

export default If;
