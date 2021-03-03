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
      }, 500);
    })();
  }, []);

  return (
    <div>
      <div className='flex m-5 justify-evenly md:'>
        <select
          className='bg-green-200 shadow-sm rounded-md border-4 border-green-400'
          onChange={(e) => setSortType(e.target.value)}>
          <option
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            defaultValue=''
            disabled>
            -- select an option --
          </option>
          <option value='name'>Name</option>
          <option value='race'>Race</option>
        </select>
        <input
          className='rounded-md shadow-sm rounded-lg'
          placeholder='Search...'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className='px-3 py-1.5 hover:bg-green-400 rounded-md border-b-4 border-r-4 border-opacity-25 border-green-400 shadow-sm rounded-lg'
          onClick={(e) => setSearch('')}>
          Clear
        </button>
      </div>
      <div className='lg:grid-cols-3 gap-3 md:grid grid-cols-2'>
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
