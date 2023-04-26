import React, { useState } from "react";
import "./App.css";
import InputForm from "../InputForm/InputForm";
import NewPost from "../NewPost/NewPost";
import dummyPosts from "../data/dummyPosts";
import Header from "../Header/Header";

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
      <Header />
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
      <footer></footer>
    </div>
  );
}
export default App;
