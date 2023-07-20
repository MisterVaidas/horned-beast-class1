import React from 'react';
import './css/modal.css';

const SelectedBeast = ({ beast, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{beast.title}</h2>
        <img src={beast.imageURL} alt={beast.title} />
        <p>{beast.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SelectedBeast;
