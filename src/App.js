import React from 'react';
import './App.css';
import InputFilterName from './components/InputFilterName';
import Table from './components/Table';
import StarWarsContext from './context/StarWarsContext';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <StarWarsContext>
      <InputFilterName />
      <FilterNumber />
      <Table />
    </StarWarsContext>
  );
}

export default App;
