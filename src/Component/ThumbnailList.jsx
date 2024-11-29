import React from "react";

const ThumbnailList = ({ imageData, selectedImage, onThumbnailItemClick }) => {
  return (
    <>
      <button
        className={`thumbnail-item ${
          selectedImage?.id === imageData.id ? "selected" : ""
        }`}
        onClick={() => onThumbnailItemClick(imageData)}
      >
        <img
          className="thumbnail-image"
          src={imageData.url}
          alt={imageData.title}
        />
        <p className="thumbnail-title">{imageData.title}</p>
      </button>
    </>
  );
};

export default ThumbnailList;
