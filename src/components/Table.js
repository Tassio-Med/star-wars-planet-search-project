import React, { useContext } from 'react';
import ContextProvider from '../context/ContextProvider';

const Table = () => {
  const { data } = useContext(ContextProvider);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => {
          const { name, diameter, climate, gravity, terrain, population,
            films, created, edited, url } = planet;
          return (
            <tr key={ index }>
              <td>
                {name}
              </td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
