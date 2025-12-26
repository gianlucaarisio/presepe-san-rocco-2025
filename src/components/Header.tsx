import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#383838",
      }}
    >
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
