import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const HornedBeast = ({ title, imageURL, description, isFavorite, onFavoriteToggle, onBeastClick }) => { 
  const [favorites, setFavorites] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
    onFavoriteToggle(title);
  };

  return (
    <div
      className={`horned-beast ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onBeastClick} 
    >
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
