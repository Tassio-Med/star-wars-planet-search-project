import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextProvider from './ContextProvider';

const StarWarsContext = ({ children }) => {
  const [data, takeData] = useState();
  // defineFilter
  // filterByNumValue

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

  const [nameToFilter, defineFilter] = useState({ name: '' });
  const filterName = ({ target }) => {
    defineFilter({ name: target.value });
  };

  const [column, defineColumn] = useState('population');
  const [comparision, defineComparision] = useState('maior que');
  const [value, defineValue] = useState(0);

  const handleChange = ({ target }) => {
    if (target.name === 'column') defineColumn(target.value);
    if (target.name === 'comparision') defineComparision(target.value);
    if (target.name === 'value') defineValue(target.value);
  };

  const [numberToFilter, filterByNumValue] = useState([]);
  const filterByNumber = () => {
    const updatedObjFil = { column, comparision, value };
    const updatedFilValues = [...numberToFilter, updatedObjFil]; // numberToFilter pode dar erro
    filterByNumValue(updatedFilValues);
  };

  const dataValue = {
    data,
    filterName,
    nameToFilter,
    handleChange,
    comparision,
    value,
    column,
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
