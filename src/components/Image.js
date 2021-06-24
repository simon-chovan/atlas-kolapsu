import React from "react";

const Image = ({ path, title }) => (
    <img src={path} alt={title} style={{ width: "100%", height: "auto", margin: "4em" }}/>
);

export default Image;