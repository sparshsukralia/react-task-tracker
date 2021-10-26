import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} text="Add" color="green" />
    </header>
  );
};

export default Header;
