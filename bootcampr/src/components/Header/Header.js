import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img className ="headerimg" src={require('./bootcamprlogo.png')} alt='logo'></img>
      <h2>Supporting bootcampers through their SoC journey.</h2>
    </div>
  );
}
