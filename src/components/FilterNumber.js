import React, { useContext } from 'react';
import ContextProvider from '../context/ContextProvider';

function FilterNumber() {
  const { handleChange, filterByNumber,
    value, numberToFilter } = useContext(ContextProvider);
  const searchOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const biggerLessEqual = ['maior que', 'menor que', 'igual a'];
  // NÃO ESQUECER: filterByNumber, para StarWarsContext;

  const removeComparision = () => {
    numberToFilter.forEach(({ comparision }) => {
      biggerLessEqual.splice(biggerLessEqual
        .indexOf(comparision), 1);
    });
    return biggerLessEqual;
  };

  const removeSearchOptions = () => {
    numberToFilter.forEach(({ column }) => {
      searchOptions.splice(searchOptions
        .indexOf(column), 1);
    });
    return searchOptions;
  };

  return (
    <section>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          {removeSearchOptions()
            .map((column, index) => <option key={ index }>{ column }</option>)}
        </select>
      </label>
      <label htmlFor="comparision">
        Operador
        <select
          name="comparision"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          {removeComparision()
            .map((comparision, index) => <option key={ index }>{ comparision }</option>)}
        </select>
      </label>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterByNumber }
      >
        Filtrar
      </button>
    </section>
  );
}

export default FilterNumber;
