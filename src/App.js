import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './SelectedBeast';
import data from './data.json';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleBeastClick = (beast) => {
    setSelectedBeast(beast);
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
  };

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="App">
      <Header
        onSearchInputChange={handleSearchInputChange}
        onFilterChange={handleFilterChange}
      />
      <Main
        data={data}
        onBeastUpdate={handleBeastClick}
        searchQuery={searchQuery}
        selectedFilter={selectedFilter}
      />
      <Footer />
      {selectedBeast && <SelectedBeast beast={selectedBeast} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
