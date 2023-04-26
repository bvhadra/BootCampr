import React, { useState } from "react";
import "./App.css";
import InputForm from "../InputForm/InputForm";
import NewPost from "../NewPost/NewPost";

function App() {
  return (
    <div className="App">
      <header>BOOTCAMPR</header>
      <InputForm />
      <NewPost />
      <footer></footer>
    </div>
  );
}

export default App;
