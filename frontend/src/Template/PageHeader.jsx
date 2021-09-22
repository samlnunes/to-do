import React from "react";

function PageHeader({ name, small }) {
  return (
    <header className="page-header">
      <h2>
        {name} <small>{small}</small>
      </h2>
    </header>
  );
}

export default PageHeader;
