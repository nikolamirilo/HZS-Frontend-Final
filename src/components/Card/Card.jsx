import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <button className="delete-image" onClick={props.handleDeleteImage}>
        <AiOutlineDelete size={30} />
      </button>
      <img
        src={props.image}
        alt="Unsplash image"
        onClick={() => {
          navigate(`/photo/${props.id}`);
        }}
      />
    </div>
  );
};

export default Card;
