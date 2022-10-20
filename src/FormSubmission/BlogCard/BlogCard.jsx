import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./blogcard.css";

const BlogCard = ({ data, deleteBlog }) => {
  return (
    <div className="card__wrapper">
      <button onClick={() => deleteBlog(data.id)} className="delete__blog">
        <AiFillCloseCircle />
      </button>
      <h1 className="card__h1">{data.title}</h1>
      <p className="card__p">{data.blog_body}</p>
      <p className="card__p1">{data.author}</p>
    </div>
  );
};

export default BlogCard;
