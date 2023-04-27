import React, { useState } from "react";
import "./App.css";
import InputForm from "../InputForm/InputForm";
import NewPost from "../NewPost/NewPost";
import dummyPosts from "../data/dummyPosts";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
      <div><Header /></div>
      <div id="main-container">
        <InputForm handleNewPost={handleNewPost} />
        {posts.map((e) => (
          <NewPost
            className={e.category}
            name={e.name}
            category={e.category}
            post={e.post}
          />
        ))}
      </div>
      <div id ="footer"><Footer /></div>
    </div>
  );
}
export default App;
