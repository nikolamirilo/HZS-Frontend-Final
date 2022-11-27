import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/Logo.png";
import { useGlobalState } from "./../../../../context/GlobalState";
import { useThemeContext } from "./../../../../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useGlobalState();
  const { theme, setDark, setLight } = useThemeContext();
  const navigate = useNavigate();

  const handleHamburgerClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  const closeSidebarOnClick = () => {
    if (width < 800) {
      setIsClicked(false);
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        {width < 800 && (
          <button
            className="hamburger"
            onClick={() => {
              handleHamburgerClick();
            }}
          >
            <GiHamburgerMenu size={40} />
          </button>
        )}
        <div className="links" style={{ display: !isClicked && width < 800 && "none" }}>
          <button
            onClick={() => {
              navigate("/");
              closeSidebarOnClick();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              closeSidebarOnClick();
              window.scroll({
                top: document.body.scrollHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Contact
          </button>
          <button
            onClick={() => {
              navigate("/add-item");
              closeSidebarOnClick();
            }}
          >
            Add Photo
          </button>
          <button
            onClick={() => {
              theme.backgroundColor === "white" ? setDark() : setLight();
            }}
          >
            {theme.backgroundColor === "white" ? "Dark Theme" : "Light Theme"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
