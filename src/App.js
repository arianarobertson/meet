import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useState, useEffect } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(36);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents =
        currentCity === 'See all cities'
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    };

    fetchData(); // Call fetchData when the component mounts or whenever currentCity/currentNOE changes
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
      ></NumberOfEvents>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
      ></CitySearch>
      <EventList events={events}></EventList>
    </div>
  );
};

export default App;
