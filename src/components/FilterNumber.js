import React, { useContext } from 'react';
import ContextProvider from '../context/ContextProvider';

function FilterNumber() {
  const { handleChange, filterByNumber, value } = useContext(ContextProvider);
  // NÃO ESQUECER: filterByNumber, para StarWarsContext;
  const searchOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const biggerLessEqual = ['maior que', 'menor que', 'igual a'];
  return (
    <section>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          {searchOptions
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
          {biggerLessEqual
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
