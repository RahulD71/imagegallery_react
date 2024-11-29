import React, { useEffect, useState } from "react";
import ThumbnailList from "./ThumbnailList";
import ImageDisplay from "./ImageDisplay";
import "./ImageGallary.css";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  /** load json and and set total images list and also set first image  */
  useEffect(() => {
    const getJsonData = async () => {
      try {
        const response = await fetch("./assets/images.json");
        const jsonData = await response.json();
        setImageList(jsonData);
        setSelectedImage(jsonData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getJsonData();
  }, []);

  if (imageList.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  const onThumbnailItemClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery-container">
      <div className="left-panel">
        <ImageDisplay selectedImage={selectedImage} />
      </div>

      <div className="right-panel">
        {imageList.map((imageData) => (
          <ThumbnailList
            key={imageData.id}
            imageData={imageData}
            selectedImage={selectedImage}
            onThumbnailItemClick={onThumbnailItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
