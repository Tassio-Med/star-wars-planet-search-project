import React from 'react';
import './App.css';
import InputFilterName from './components/InputFilterName';
import Table from './components/Table';
import StarWarsContext from './context/StarWarsContext';

function App() {
  return (
    <StarWarsContext>
      <InputFilterName />
      <Table />
    </StarWarsContext>
  );
}

export default App;
