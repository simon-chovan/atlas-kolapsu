import React from "react";

const Image = ({ path, title }) => (
  <div>
    <img src={path} alt={title} />
  </div>
);

export default Image;