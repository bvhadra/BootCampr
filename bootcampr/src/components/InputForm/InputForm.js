import React from "react";
import "./InputForm.css";

export default function InputForm() {
  return (
    <div id="inputform">
      <input type="text" id="name" placeholder="Name"></input>
      <select id="category">
        <option value="category">Category</option>
        <option value="General">General</option>
        <option value="Question">Question</option>
        <option value="Joke/Meme">Joke/Meme</option>
        <option value="Random">Random</option>
      </select>
      <textarea
        type="text"
        id="textarea"
        rows="5"
        placeholder="Write your post here"
      ></textarea>
      <button>Submit</button>
    </div>
  );
}
