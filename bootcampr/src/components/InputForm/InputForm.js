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
    setName("");
    setPost("");
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
        <option value="" disabled={true}>
          Category
        </option>
        <option value="general">general</option>
        <option value="question">question</option>
        <option value="funny">funny</option>
        <option value="random">random</option>
      </select>
      <textarea
        type="text"
        name="post"
        id="textarea"
        rows="18"
        placeholder="Write your post here"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        maxLength={1000}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputForm;
