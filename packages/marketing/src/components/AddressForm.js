import React, { useState } from 'react';
import { Typography, Input, Button, Select } from '@material-ui/core';

function AddressForm() {
  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can access all the address components (streetNumber, streetName, city, state, postalCode)
    // and perform any necessary actions, such as validation or submission to a server.

    // Example: Log the address components
    console.log({
      streetNumber,
      streetName,
      city,
      state,
      postalCode
    });

    // Reset the form after submission
    setStreetNumber('');
    setStreetName('');
    setCity('');
    setState('');
    setPostalCode('');
  };

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];
  
  return (
    <Typography variant="h5" align="left" color="textSecondary" paragraph>
    <form onSubmit={handleSubmit}>
      <div> 
        <label>
          Street Number:
          <Input
            type="text"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            required
          />
        </label>
        <br />
  
        <label>
          Street Name:
          <Input
            type="text"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
            required
          />
        </label>
        <br />
  
        <label>
          City:
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <br />
  
        <label>
          State:
          <Select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select State</option>
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </label>
        <br />
  
        <label>
          Postal Code:
          <Input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </label>
      </div>
      <br />
      
  

    </form>
    </Typography>
  );
};

export default AddressForm;
