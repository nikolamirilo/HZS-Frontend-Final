import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useImagesContext } from "./../../context/ImagesContext";

const Hero = () => {
  const { images } = useImagesContext();
  console.log(images);
  return (
    <div className="hero">
      <h1>Welcome to Unsplash Photo Gallery!</h1>
      <button className="scroll-down-btn">
        <IoIosArrowDown size={50} />
      </button>
    </div>
  );
};

export default Hero;
