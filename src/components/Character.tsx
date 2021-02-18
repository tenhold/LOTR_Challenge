import React from 'react';

interface Props {
  name: string;
  race: string;
  gender?: string;
  birth: string;
  death: string;
  wikiUrl?: string;
}

export const Character: React.FC<Props> = ({
  name,
  race,
  gender,
  birth,
  death,
  wikiUrl,
}) => {
  return (
    <div className='container sm m-1 p-3 bg-gray-200'>
      <h2>{name}</h2>
      <h4>{race}</h4>
      <h4>{gender}</h4>
      <p>
        Birth: {birth} Death: {death}
      </p>
    </div>
  );
};
