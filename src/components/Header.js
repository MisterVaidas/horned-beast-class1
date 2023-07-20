import React from 'react';

const Header = ({ onSearchInputChange }) => {

  const handleInputChange = (e) => {
    onSearchInputChange(e.target.value);
  };



  return (

    
    <header className='header'>
        <h1 className='header-title'>Horned Beast World</h1>
        <input type="text" onChange={handleInputChange} placeholder="Search..." />
    </header>
    
  );
};

export default Header;