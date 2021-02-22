import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CharacterProps } from '../types';
// import { docs } from '../data/characters';
import { docs } from '../data/mainCharacters';
import { Character } from './Character';

export const Characters = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [character, setCharacter] = useState<CharacterProps[]>([]);
  const [sortType, setSortType] = useState('');
  const [search, setSearch] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  //   const getCharacter = [...characters].filter((character: any) =>
  //     search.includes(character.name)
  //   );
  //   setCharacters(getCharacter);
  // };

  useEffect(() => {
    const sortCharacters = (type: string) => {
      const sortChar = [...characters].sort((a: any, b: any) => {
        return a[type].localeCompare(b[type]);
      });
      setCharacters(sortChar);
    };

    sortCharacters(sortType);
  }, [sortType]);

  useEffect(() => {
    setCharacter(
      [...characters].filter((character: CharacterProps | any) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, characters]);

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
      <div>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option defaultValue='' disabled>
            -- select an option --
          </option>
          <option value='name'>Name</option>
          <option value='race'>Race</option>
        </select>
        <input
          placeholder='Search...'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={(e) => setSearch('')}>Clear</button>
      </div>
      <div>
        {characters &&
          character.map(({ name, race, gender, birth, death, wikiUrl }, i) => (
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
    </div>
  );
};
