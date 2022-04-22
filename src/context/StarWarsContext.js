import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextProvider from './ContextProvider';

const StarWarsContext = ({ children }) => {
  const [data, takeData] = useState();
  const [nameToFilter, defineFilter] = useState({
    name: '',
  });

  // filteredPlanetByNumeric
  // filterByNumericValues

  const [column, defineColumn] = useState('population');
  const [comparision, defineComparision] = useState('maior que');
  const [value, defineValue] = useState(0);
  const [numberToFilter, filterByNumValue] = useState([]);

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
    defineFilter({ name: target.value });
  };

  const handleChange = ({ target }) => {
    if (target.name === 'column') defineColumn(target.value);
    if (target.name === 'comparision') defineComparision(target.value);
    if (target.name === 'value') defineValue(target.value);
  };

  const filterByNumber = () => {
    const otherObjFil = { column, comparision, value };
    const otherFilValues = [...numberToFilter, otherObjFil]; // numberToFilter pode dar erro
    filterByNumValue(otherFilValues);
  };

  const dataValue = {
    data,
    nameToFilter,
    filterName,
    handleChange,
    column,
    comparision,
    value,
    numberToFilter,
    filterByNumber,
  };

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
