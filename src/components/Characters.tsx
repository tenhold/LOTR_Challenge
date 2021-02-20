import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CharacterProps } from '../types';
import { docs } from '../data/characters';
import { Character } from './Character';

export const Characters = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    (async () => {
      // const { data } = await axios.get(`https://the-one-api.dev/v2/character`, {
      //   headers: {
      //     Authorization: `Bearer ${process.env.REACT_APP_LOTR_TOKEN}`,
      //   },
      // });
      // setCharacters(data.docs);

      setTimeout(() => {
        setCharacters(docs);
      }, 100);
    })();
  }, []);
  return (
    <div>
      {characters &&
        characters.map(({ name, race, gender, birth, death, wikiUrl }, i) => (
          <Character
            key={i}
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
