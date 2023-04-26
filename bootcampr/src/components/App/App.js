import React, { useState } from "react";
import "./App.css";
import InputForm from "../InputForm/InputForm";
import NewPost from "../NewPost/NewPost";
import Comment from "../Comment/Comment";
import dummyPosts from '../data/dummyPosts';

function App() {
  // initial state to show the dummyPosts data on the screen
const [posts, setPosts] = useState([dummyPosts])


  return (
    <div className="App">
      <header>BOOTCAMPR</header>
      <InputForm />
      <Comment />
      <NewPost />
      <footer></footer>
    </div>
  );
}

export default App;
