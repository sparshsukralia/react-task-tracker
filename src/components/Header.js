import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
      />
    </header>
  );
};

export default Header;
