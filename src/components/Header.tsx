import React from "react";
import BlackButton from "./buttons/BlackButton";
import useScrollTo from "../hooks/useScrollTo";

function Header() {
  const scrollTo = useScrollTo();
  return (
    <header className="header">
      <BlackButton
        children="Test"
        style={{
          width: "64px",
          height: "64px",
        }}
        onClick={() => scrollTo("footer")}
      />
    </header>
  );
}

export default Header;
