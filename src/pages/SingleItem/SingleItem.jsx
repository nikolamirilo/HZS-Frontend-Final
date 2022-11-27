import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import { Items } from "../../components";

const SingleItem = () => {
  const [image, setImage] = useState({});
  const { id } = useParams();
  const getSingleImage = async () => {
    await axios.get(`http://localhost:3000/photo/${id}`).then((response) => {
      const singleImageData = response.data;
      setImage(singleImageData);
    });
  };
  useEffect(() => {
    getSingleImage();
  }, [id]);
  return (
    <div className="single-item-page">
      <div className="single-item-container">
        <div className="single-item">
          <div className="left-content">
            <div className="image" style={{ backgroundImage: `url(${image.filename})` }}></div>
            <div className="image-stats">
              <div className="likes">
                <span>Likes </span>
                <h2>30</h2>
              </div>
              <div className="views">
                <span>Views </span>
                <h2>1200</h2>
              </div>
              <div className="downloads">
                <span>Downloads </span>
                <h2>200</h2>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="main-user-info">
              <div className="user-name">
                <h1>User</h1>
                <p>@user</p>
              </div>
            </div>
            <div className="user-stats">
              <div className="likes">
                <p>Likes</p>
                <h1>100</h1>
              </div>
              <div className="photos">
                <p>Photos </p>
                <h1>12</h1>
              </div>
              <div className="collections">
                <p>Collections </p>
                <h1>2</h1>
              </div>
            </div>
            <div className="other-user-info">
              <span>Hashtags: {image.hashtags}</span>
              <div className="user-location">
                <span>Loacation: {image.location}</span>
                <GoLocation color="red" size={30} />
              </div>
              <div className="description">
                <p>{image.description}</p>
              </div>

              <div className="dates">
                <span>Created At: {image.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Items />
    </div>
  );
};

export default SingleItem;
