import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextProvider from './ContextProvider';

const StarWarsContext = ({ children }) => {
  const [data, takeData] = useState();
  const [nameToFilter, defineFilter] = useState({
    name: '',
  });

  useEffect(() => {
    const fetchApiData = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(URL);
      const jsonData = await response.json();
      const { results } = jsonData;
      takeData(results);
    };
    fetchApiData();
  }, []);

  const filterName = ({ target }) => {
    defineFilter({
      name: target.value,
    });
  };

  const dataValue = { data, nameToFilter, filterName };

  return (
    <ContextProvider.Provider value={ dataValue }>
      { children }
    </ContextProvider.Provider>
  );
};

StarWarsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsContext;
