import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const HornedBeast = (props) => {
  const { title, imageURL, description } = props;
  const [favorites, setFavorites] = useState(0);

  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div className="horned-beast">
      <h2 className="title">{title}</h2>
      <img className="image" src={imageURL} alt={title} title={title} />
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <FontAwesomeIcon icon={faHeart} color="red" />
        {favorites}
      </button>
      <p className="description">{description}</p>
     
    </div>
  );
};

export default HornedBeast;
