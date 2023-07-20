import React, { useState } from 'react';
import HornedBeast from '../components/HornedBeast';
import '../css/styles.css';

const Main = ({ data, onBeastUpdate, searchQuery }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter((favorite) => favorite !== title));
    } else {
      setFavorites([...favorites, title]);
    }
  };

  const handleBeastClick = (beast) => {
    onBeastUpdate(beast);
  };

  const filteredData = data.filter((beast) => {
    const regularExpression = new RegExp(searchQuery, 'i');
    return regularExpression.test(beast.title) || regularExpression.test(beast.description);
  });
  

  return (
    <main className='grid-container'>
    {filteredData.map((beast) => (
      <div key={beast.id}>
        <HornedBeast
          title={beast.title}
          imageURL={beast.imageURL}
          description={beast.description}
          isFavorite={favorites.includes(beast.title)}
          onFavoriteToggle={handleFavoriteToggle}
          onBeastClick={() => handleBeastClick(beast)}
        />
      </div>
    ))}
  </main>
  
  );
};

export default Main;