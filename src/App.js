import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsContext from './context/StarWarsContext';

function App() {
  return (
    <StarWarsContext>
      <Table />
    </StarWarsContext>
  );
}

export default App;
