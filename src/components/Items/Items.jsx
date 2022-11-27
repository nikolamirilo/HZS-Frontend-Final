import React from "react";
import { Grid, GridItem } from "react-masonry-grid";
import Card from "../Card/Card";
import { useImagesContext } from "./../../context/ImagesContext";
import axios from "axios";

const Items = (props) => {
  const { images } = useImagesContext();
  return (
    <div className="items">
      {props.type === "all-images" ? (
        <>
          <h2>
            <i>Beautiful, free images and photos that you can download and use for any project</i>
          </h2>
          <h2>
            <i>Better than any royalty free or stock photos!</i>
          </h2>
        </>
      ) : null}

      <Grid gutter={10} columnWidth={350} rowHeight={10}>
        {images.map((item, idx) => (
          <GridItem key={idx}>
            <Card
              id={item._id}
              image={item.filename}
              handleDeleteImage={() => {
                axios
                  .delete(`http://localhost:3000/photo/${item._id}`)
                  .then(() => {
                    alert("Successfully deleted image");
                    window.location.reload();
                  })
                  .catch((error) => {
                    alert(error.message);
                  });
              }}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Items;
