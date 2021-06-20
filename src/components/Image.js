import React from "react";

const Image = ({ path, title }) => (
    <img src={path} alt={title} style={{ width: "100%", height: "auto" }}/>
);

export default Image;