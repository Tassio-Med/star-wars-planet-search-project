import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextProvider from './ContextProvider';

const StarwarsContext = ({ children }) => {
  const [data, takeData] = useState([]);

  const fetchApiData = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const jsonData = await response.json();
    takeData(jsonData.results);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const dataValue = { data };

  return (
    <ContextProvider.Provider value={ dataValue }>
      { children }
    </ContextProvider.Provider>
  );
};

StarwarsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsContext;
