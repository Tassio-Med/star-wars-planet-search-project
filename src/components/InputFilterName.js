import React, { useContext } from 'react';
import ContextProvider from '../context/ContextProvider';

function InputFilterName() {
  const { filterName } = useContext(ContextProvider); // filterName vai para StarWarsContext

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ filterName }
    />
  );
}

export default InputFilterName;
