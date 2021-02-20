import React from 'react';
import { CharacterProps } from '../types';

export const Character: React.FC<CharacterProps> = ({
  name,
  race,
  gender,
  birth,
  death,
  wikiUrl,
}) => {
  return (
    <div className='container sm m-1 p-3 bg-gray-200'>
      <h2 className='text-2xl'>{name}</h2>
      <h4>{race}</h4>
      <h4>{gender}</h4>
      <p>
        Birth: {birth} Death: {death}
      </p>
      <a href={wikiUrl}>Wiki</a>
    </div>
  );
};
