import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './SelectedBeast';
import data from './data.json';

function App() {

  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastClick = (beast) => {
    setSelectedBeast(beast);
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
  };

  return (
    <div className="App">
      <Header />
      <Main data={data} onBeastUpdate={handleBeastClick} />
      <Footer />
      {selectedBeast && <SelectedBeast beast={selectedBeast} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
