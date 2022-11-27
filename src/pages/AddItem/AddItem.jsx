import React, { useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const initialPostState = {
    title: "",
    filename: "",
    description: "",
    hashtags: "",
    location: "",
    createdAt: "",
  };

  const [post, setPost] = useReducer(
    (post, updates) => ({
      ...post,
      ...updates,
    }),
    initialPostState
  );
  return (
    <div className="add-item">
      <div className="add-item-content">
        <div className="post-form">
          <h2>Enter post information</h2>
          <form>
            <label htmlFor="#title">Enter post title:</label>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={(e) => {
                setPost({ title: e.target.value });
              }}
            />
            <label htmlFor="#description">Enter post description:</label>
            <input
              type="text"
              id="description"
              value={post.description}
              onChange={(e) => {
                setPost({ description: e.target.value });
              }}
            />
            <label htmlFor="#hashtags">Enter post hashtags:</label>
            <input
              type="hashtags"
              id="hashtags"
              value={post.hashtags}
              onChange={(e) => {
                setPost({ hashtags: e.target.value });
              }}
            />
            <label htmlFor="#location">Enter post your location:</label>
            <input
              type="text"
              id="location"
              value={post.location}
              onChange={(e) => {
                setPost({ location: e.target.value });
              }}
            />
            <label htmlFor="#filename">Enter post image url:</label>
            <input
              type="text"
              id="filename"
              value={post.filename}
              onChange={(e) => {
                setPost({ filename: e.target.value });
              }}
            />
            <label htmlFor="#createdAt">Enter date of post:</label>
            <input
              type="text"
              id="createdAt"
              value={post.createdAt}
              onChange={(e) => {
                setPost({ createdAt: e.target.value });
              }}
            />
          </form>
          <button
            className="post-btn"
            onClick={() => {
              if (post.title !== "" && post.description !== "" && post.filename !== "") {
                axios
                  .post("http://localhost:3000/photo", {
                    title: post.title,
                    filename: post.filename,
                    description: post.description,
                    hashtags: post.hashtags,
                    location: post.location,
                    createdAt: post.createdAt,
                  })
                  .then(() => {
                    alert("Succesfuly posted image");
                    navigate("/");
                    window.location.reload();
                  })
                  .catch((error) => {
                    alert(error.message);
                  });
              } else {
                alert("Enter at least title, description and image");
              }
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
