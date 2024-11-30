
import React from "react";
import "./header.css"; 
import logo from "./images/logo.png"

function Header() {
  return (
    <header>
      <img src={logo}  style={{ width: "50px" }} />
      <h1>Bienvenue sur le profil étudiant</h1>
    </header>
  );
}

export default Header;
