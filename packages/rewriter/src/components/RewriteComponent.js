import React, { useState } from "react";
import axios from 'axios';

const RewriteComponent = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState({
    shakespeare: "",
    king: "",
    poe: "",
    dickinson: "",
    butler: "",
  });

  const authors = [
    "Shakespeare",
    "Steven King",
    "Eager Allan Poe",
    "Emily Dickinson",
    "Octavia Butler",
  ];

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handlePreviewClick = async () => {
    let newOutput = {};
    for (const author of authors) {
      const result = await axios.post("/api/rewrite", {
        text: input,
        author: author,
      });
      newOutput[author.toLowerCase().replace(" ", "")] = result.data;
    }
    setOutput(newOutput);
  };

  return (
    <div>
      <textarea onChange={handleInputChange} value={input} />
      <button onClick={handlePreviewClick}>Preview</button>
      {authors.map((author) => (
        <div key={author}>
          <h2>{author}</h2>
          <p>{output[author.toLowerCase().replace(" ", "")]}</p>
        </div>
      ))}
    </div>
  );
};

export default RewriteComponent;
