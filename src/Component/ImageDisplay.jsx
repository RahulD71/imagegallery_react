import React from "react";

const ImageDisplay = ({ selectedImage }) => {
  return (
    <>
      {selectedImage && (
        <>
          <div className="preview-image">
            <img src={selectedImage.url} alt={selectedImage.title} />
          </div>
          <div className="detail-info">
            {/* <h1>{selectedImage.title}</h1> */}
            <p>
              <strong>Title:</strong> {selectedImage.title}
            </p>
            <p>
              <strong>Category:</strong> {selectedImage.category}
            </p>
            <p>
              <strong>Description: </strong> {selectedImage.description}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ImageDisplay;
