import React from 'react';
import { docs } from '../data/characters.json';

export const Characters = () => {
  return (
    <div className='bg-gray-200'>
      {docs.map(({ name }) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
};
