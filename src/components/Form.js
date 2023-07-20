import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const FormComponent = ({ data, onFilterUpdate }) => {
  const [selectedHorns, setSelectedHorns] = useState('');

  const handleHornsChange = (event) => {
    setSelectedHorns(event.target.value);
    onFilterUpdate(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="hornsFilter">
        <Form.Label>Filter by Horns:</Form.Label>
        <Form.Select value={selectedHorns} onChange={handleHornsChange}>
          <option value="">All</option>
          <option value="1">1 Horn</option>
          <option value="2">2 Horns</option>
          <option value="3">3 Horns</option>
          <option value="6">6 Horns</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default FormComponent;
