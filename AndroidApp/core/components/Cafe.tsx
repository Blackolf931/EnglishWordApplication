import React from 'react';
import { CatData } from '../interfaces/CatData';
import Cat from './Cat';

export const Cafe = () => {
  const cats: CatData[] = [
    {name: "Tom", isHungry: false},
    {name: "White", isHungry: false},
    {name: "Black", isHungry: true}
  ];
  
  return (
    <>
      {cats.map((x, index) => (
        <Cat key={index} cat={x}/>
      ))}
    </>
  );
};
