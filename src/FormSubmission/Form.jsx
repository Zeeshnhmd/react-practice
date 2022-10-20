import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./form.css";
import BlogCard from "./BlogCard/BlogCard";
import { useEffect } from "react";

export const Form = () => {
  const [text, setText] = useState("");
  const [textArea, setTextArea] = useState("");
  const [options, setOptions] = useState("");
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/formdata");
      const data = await response.json();
      console.log(data);
      setApiData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addBlog = async (newBlog) => {
    const response = await fetch("/formdata", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    });
    const data = await response.json();
    console.log(data);
    setApiData([data, ...apiData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const datas = {
      id: uuidv4(),
      title: text,
      blog_body: textArea,
      author: options,
    };
    console.log(datas);
    addBlog(datas);
    // fetchData();

    setText("");
    setTextArea("");
    setOptions("");
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleOptions = (e) => {
    setOptions(e.target.value);
  };

  const deleteBlog = async (id) => {
    await fetch(`/formdata/${id}`, {
      method: "DELETE",
    });
    setApiData(apiData.filter((item) => item.id !== id));
  };

  return (
    <div className="create">
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" required value={text} onChange={handleText} />
        <label>Blog body:</label>
        <textarea
          required
          value={textArea}
          onChange={handleTextArea}
        ></textarea>
        <label>Blog author:</label>
        <select value={options} onChange={handleOptions}>
          <option value=""></option>
          <option value="Jhon">Jhon</option>
          <option value="Jhan">Jhan</option>
        </select>
        <button className="formSumit">Add blog</button>
      </form>

      <div className="blogs__wrapper">
        {apiData.map((api) => (
          <BlogCard key={api.id} data={api} deleteBlog={deleteBlog} />
        ))}
      </div>
    </div>
  );
};
