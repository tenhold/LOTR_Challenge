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
  const first = name?.split(' ')[0][0];
  const last = name?.split(' ')[1][0];
  return (
    <div className='flex flex-col hover:bg-green-300 hover:shadow-lg border-b-4 border-r-4 border-opacity-25 border-green-400 shadow-sm rounded-lg h-18 container sm m-1 p-3 rounded-lg text-green-900'>
      <div className='flex flex-row container'>
        <div className='bg-green-400 w-20 h-20 justify-items-center rounded-full mr-4 mb-4'>
          <h2 className='text-5xl font-black'>{first}</h2>
        </div>
        <h2 className='self-center text-3xl text-green-900 hover:text-green-50'>
          <a href={wikiUrl} target='_blank' rel='noopener noreferrer'>
            {name}
          </a>
        </h2>
      </div>
      <div className='flex flex-row space-x-6 text-xl pb-4'>
        <h4>{race}</h4>
        <h4>{gender}</h4>
      </div>
      <div>
        <p>
          <b>Birth:</b> {birth} <br></br>
          <b>Death:</b> {death}
        </p>
      </div>
    </div>
  );
};
