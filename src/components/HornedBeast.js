import React from "react";

const HornedBeast = (props) => {
    const { title, imageURL, description } = props;
    console.log(imageURL)

return (
    <div className="horne-beast">
        <h2 className="title">{title}</h2>
        <img className="image" src={imageURL} alt={title} title={title} />
        <p className="description">{description}</p>
    </div>
);
};

export default HornedBeast;