import React, { useState } from "react";
import { Input } from '@material-ui/core';

const OpeningActsForm = () => {
  const [eventData, setEventData] = useState({
    openingActs: 0,
    openingActNames: [],
    openingActWebsites: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10),
    }));
  };

  const handleOpeningActNameChange = (index, e) => {
    const { value } = e.target;
    setEventData((prevData) => {
      const openingActNames = [...prevData.openingActNames];
      openingActNames[index] = value;
      return {
        ...prevData,
        openingActNames,
      };
    });
  };

  const handleOpeningActWebsiteChange = (index, e) => {
    const { value } = e.target;
    setEventData((prevData) => {
      const openingActWebsites = [...prevData.openingActWebsites];
      openingActWebsites[index] = value;
      return {
        ...prevData,
        openingActWebsites,
      };
    });
  };

  const renderOpeningActFields = () => {
    const openingActFields = [];
    for (let i = 0; i < eventData.openingActs; i++) {
      openingActFields.push(
        <div key={i}>
          <label>
            Opening Act {i + 1} Name:
            <Input
              type="text"
              value={eventData.openingActNames[i] || ""}
              onChange={(e) => handleOpeningActNameChange(i, e)}
            />
          </label>
          <br />
          <label>
            Opening Act {i + 1} Website:
            <Input
              type="text"
              value={eventData.openingActWebsites[i] || ""}
              onChange={(e) => handleOpeningActWebsiteChange(i, e)}
            />
          </label>
        </div>
      );
    }
    return openingActFields;
  };

  return (
    <form>
      <label>
        How many opening acts? (0-5):
        <Input
          type="number"
          name="openingActs"
          value={eventData.openingActs}
          onChange={handleChange}
          min="0"
          max="5"
          step="1"
        />
      </label>
      {renderOpeningActFields()}
    </form>
  );
};

export default OpeningActsForm;
