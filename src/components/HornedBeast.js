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

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    setFavorites(favorites + 1);
    onFavoriteToggle(title);
  };

  const handleImageClick = () => {
    onBeastClick();
  };

  const handleDescriptionClick = (event) => {
    event.stopPropagation();
  };

  const handleTitleClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div
      className={`horned-beast ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onBeastClick}
    >
      <h2 className="title" onClick={handleTitleClick}>{title}</h2>
      <img className="image" src={imageURL} alt={title} title={title} onClick={handleImageClick} />
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <FontAwesomeIcon icon={faHeart} color="red" />
        {favorites}
      </button>
      <p className="description" onClick={handleDescriptionClick}>{description}</p>
    </div>
  );
};

export default HornedBeast;
