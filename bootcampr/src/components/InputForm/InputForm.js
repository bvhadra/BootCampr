import React, { useState } from "react";
import "./InputForm.css";

function InputForm({ handleNewPost }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState("");

  //   // array? posts?
  //   const handleChange = (event) => {
  //     setForm({ ...form, [event.target.name]: event.target.value });
  //   };

  function handleSubmit() {
    // stop the page clearing the form and refreshing on each input
    handleNewPost(name, category, post);
  }

  return (
    <div className="inputform">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="category" disabled selected>
          Category
        </option>
        <option value="General">General</option>
        <option value="Question">Question</option>
        <option value="Joke/Meme">Joke/Meme</option>
        <option value="Random">Random</option>
      </select>
      <textarea
        type="text"
        name="post"
        id="textarea"
        rows="5"
        placeholder="Write your post here"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputForm;