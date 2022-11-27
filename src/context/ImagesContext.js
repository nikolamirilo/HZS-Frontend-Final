import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ImagesContext = createContext();

export const useImagesContext = () => {
  return useContext(ImagesContext);
};

export const ImagesContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const getAllImages = async () => {
    await axios.get("http://localhost:3000/photos").then((response) => {
      const imagesData = response.data;
      setImages(imagesData);
    });
  };
  console.log(images);
  useEffect(() => {
    getAllImages();
  }, []);

  return <ImagesContext.Provider value={{ images }}>{children}</ImagesContext.Provider>;
};
