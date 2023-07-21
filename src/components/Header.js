import React from 'react';
import { Form } from 'react-bootstrap';

const Header = ({ onSearchInputChange, onFilterChange }) => {
  const handleSearchInputChange = (e) => {
    const searchQuery = e.target.value;
    onSearchInputChange(searchQuery);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <header className='header'>
      <h1 className='header-title'>Horned Beast World</h1>
      <Form className='form'>
        <Form.Control as="select" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="1">1 Horn</option>
          <option value="2">2 Horns</option>
          <option value="3">3 Horns</option>
          <option value="6">6 Horns</option>
        </Form.Control>
        <Form.Control
          type="text"
          placeholder="Search..."
          onChange={handleSearchInputChange}
        />
      </Form>
    </header>
  );
};

export default Header;
