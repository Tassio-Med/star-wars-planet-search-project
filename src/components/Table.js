import React, { useContext } from 'react';
import ContextProvider from '../context/ContextProvider';

function Table() {
  const { data, nameToFilter } = useContext(ContextProvider);
  const tableInf = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL'];
  return (
    <table>
      <thead>
        <tr>
          {tableInf.map((inf, index) => <th key={ index }>{ inf }</th>)}
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.filter((setPlanet) => setPlanet.name
            .includes(nameToFilter.name))
            .map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))
        ) : (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
