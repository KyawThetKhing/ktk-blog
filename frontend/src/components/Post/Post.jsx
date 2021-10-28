import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo !== "" ? (
        <img src={PF + post.photo} alt="" className="postImg" />
      ) : null}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category, index) => {
            <div key={index} className="postCat">
              {category.name}
            </div>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
