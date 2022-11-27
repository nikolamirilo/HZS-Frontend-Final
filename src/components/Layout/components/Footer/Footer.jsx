import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGlobe, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <button
          onClick={() => {
            window.location.href = "mailto:unsplash@gmail.com";
          }}
        >
          <AiOutlineMail size={25} />
        </button>
        <button
          onClick={() => {
            window.location.href = "https://unsplash.com/";
          }}
        >
          <BsGlobe size={25} />
        </button>
        <button
          onClick={() => {
            window.location.href = "https://www.instagram.com/unsplash/";
          }}
        >
          <BsInstagram size={25} />
        </button>
      </div>
      <p>Copyright @S2S-2022</p>
    </footer>
  );
};

export default Footer;
