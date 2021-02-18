import React from 'react';
import { docs } from '../data/characters.json';

export const Characters = () => {
  return (
    <div>
      {docs.map(({ name }) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
};
