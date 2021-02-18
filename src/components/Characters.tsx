import React from 'react';
import { docs } from '../data/characters.json';
import { Character } from './Character';

export const Characters = () => {
  return (
    <div>
      {docs.map(({ name, race, gender, birth, death, wikiUrl }) => (
        <Character
          key={name}
          name={name}
          race={race}
          gender={gender}
          birth={birth}
          death={death}
          wikiUrl={wikiUrl}
        />
      ))}
    </div>
  );
};
