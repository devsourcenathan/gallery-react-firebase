import React from "react";

export const Upload = () => {
  return (
    <div className="upload">
      <label htmlFor="images" className="drop-container">
        <span className="drop-title">Drop files here</span>
        or
        <input type="file" id="images" accept="image/*" required />
      </label>
    </div>
  );
};
