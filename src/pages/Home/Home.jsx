import React from "react";
import { Hero } from "../../components";
import Items from "./../../components/Items/Items";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Items type="all-images" />
    </div>
  );
};

export default Home;
