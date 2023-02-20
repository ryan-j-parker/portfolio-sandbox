import React, { useState } from 'react';

export default function AltEffects() {
  const [animals, setAnimals] = useState([]);

  const randomAnimal = () => {
    const animals = [
      '🐶',
      '🐱',
      '🐭',
      '🐹',
      '🐰',
      '🦊',
      '🐻',
      '🐼',
      '🐨',
      '🐯',
      '🦁',
      '🐮',
      '🐷',
      '🐸',
      '🐵',
      '🐔',
      '🐧',
      '🐦',
      '🐤',
      '🐣',
      '🐥',
      '🦆',
      '🦅',
      '🦉',
      '🦇',
      '🐺',
      '🐗',
      '🐴',
      '🦄',
      '🐝',
      '🐛',
      '🦋',
      '🐌',
      '🐞',
      '🐜',
      '🕷',
      '🕸',
      '🐢',
      '🐍',
      '🦎',
      '🦂',
      '🦀',
      '🦑',
      '🦐',
      '🦞',
      '🦀',
      '🦑',
      '🦐',
    ];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  const clickHandler = () => {
    setAnimals([...animals, randomAnimal()]);
  };

  return (
    <div>
      <button onClick={clickHandler}>Add animal</button>
      <div>
        {animals.map((animal, index) => (
          <span key={index}>{animal}</span>
        ))}
      </div>
    </div>
  );
}
