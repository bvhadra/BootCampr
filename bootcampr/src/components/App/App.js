import React, { useState } from "react";
import "./App.css";
import InputForm from "../InputForm/InputForm";
import NewPost from "../NewPost/NewPost";
import dummyPosts from "../data/dummyPosts";
function App() {
  // initial state to show the dummyPosts data on the screen
  const [posts, setPosts] = useState(dummyPosts);
  console.log(posts);
  const handleNewPost = (name, category, post) => {
    const newPost = {
      id: Math.random().toString(36),
      name: name,
      category: category,
      post: post,
    };
    setPosts([...posts, newPost]);
  };
  return (
    <div className="App">
      <header>BOOTCAMPR</header>
      <InputForm handleNewPost={handleNewPost} />
      {posts.map((e) => (
        <NewPost name={e.name} category={e.category} post={e.post} />
      ))}
      <footer></footer>
    </div>
  );
}
export default App;