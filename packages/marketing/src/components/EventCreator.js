import React, { useState } from 'react';
import AddressForm from './AddressForm';
import OpeningActsForm from './OpeningActsForm';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Input, Button, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const EventCreator = () => {
  const classes = useStyles();
  const [eventData, setEventData] = useState({
    title: '',
    startTime: '',
    endTime: '',
    eventType: '',
    venueName: '',
    venueAddress: '',
    publicDoorsOpenTime: '',
    performerVenueOpenTime: '',
    headliner: '',
    headlinerWebsite: '',
    promotionalWebsite: '',
    openingActsCount: 0,
    openingActs: [],
    openingActNames: [],
    openingActWebsites: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating saving data to a file by logging JSON data to console
    console.log('Event data:', JSON.stringify(eventData, null, 2));
  };

  const handleOpeningActsChange = (openingActsData, openingActWebsites) => {
    setEventData((prevEventData) => ({
      ...prevEventData,
      openingActsCount: openingActsData.length,
      openingActs: openingActsData,
      openingActWebsites,
    }));
  };
  
  
  

  return (
    <div>
      <Typography variant="h5" align="left" color="textSecondary" paragraph>
      <h1>Event Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Event questions:</h3>
          <br />
          <label>
            Event title:
            <div>
              <Input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
            />
            </div>

          </label>
          <br />
          <br />
          <label>
            <div>
              <label>
                Event start time and date:
                <Input
                  type="datetime-local"
                  name="startTime"
                  value={eventData.startTime}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Event end time and date:
                <Input
                  type="datetime-local"
                  name="endTime"
                  value={eventData.endTime}
                  onChange={handleChange}
                />
              </label>
            </div>
          </label>
          <br />
          <label>
            What kind of event is this?:
            <Select
              name="eventType"
              value={eventData.eventType}
              onChange={handleChange}
            >
              <option value="">Select an event type</option>
              <option value="Music Concerts">Music Concert</option>
              <option value="Music Festivals">Music Festival</option>
              <option value="Football">Football Game</option>
              <option value="Baseball">Baseball Game</option>
              <option value="Soccer">Soccer Game</option>
              <option value="Basketball">Basketball Game</option>
              <option value="RocketLeauge">Rocket League Game</option>
            </Select>
          </label>
        </label>
        <br />
        <label>
          <h3>Venue questions:</h3>
          <br />
          <label>
            Venue name:
            <Input
              type="text"
              name="venueName"
              value={eventData.venueName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            When doors open to the public:
            <Input
              type="datetime-local"
              name="publicDoorsOpenTime"
              value={eventData.publicDoorsOpenTime}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            When doors open to the performers:
            <Input
              type="datetime-local"
              name="performerVenueOpenTime"
              value={eventData.performerVenueOpenTime}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Venue address:
            <AddressForm />
          </label>
          <br />
        </label>
        <br />
        <label>
          <h3>Performer quesitons:</h3>
          <br />
          <label>
            Headliner:
            <Input
              type="text"
              name="headliner"
              value={eventData.headliner}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
          Artist's website:
          <Input
            type="text"
            name="headlinerWebsite"
            value={eventData.headlinerWebsite}
            onChange={handleChange}
          />
        </label>
          <br />
          <label>
            Artist's promotional website:
            <Input
              type="text"
              name="promotionalWebsite"
              value={eventData.promotionalWebsite}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* {OpeningActsForm({
            openingActsCount: eventData.openingActsCount,
            onOpeningActsChange: handleOpeningActsChange,
          })} */}
          {OpeningActsForm()}

        </label>
        <label>
          <br />

        </label>

        <br />
        <Button type="submit">Send to console</Button>
      </form>
      </Typography>
    </div>
  );
};

export default EventCreator;
