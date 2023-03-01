import React from 'react';
import { useState } from 'react';
import searchImages from '../../services/api';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">{searchTerm}</label>
        <input
          onChange={handleChange}
          value={searchTerm}
          type="text"
          name="search"
          placeholder="Search for images"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export function ImageList({ images }) {
  let date = Math.floor(Date.now() * Math.random() * 0.5);

  return (
    <div>
      {images.map((image) => (
        <img
          style={{ height: '350px', width: 'auto' }}
          key={date + image.id}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      ))}
    </div>
  );
}

export function ImageSearch() {
  const [images, setImages] = useState([]);
  //   const searchTerm = searchImages();

  const handleSubmit = async (searchTerm) => {
    const result = await searchImages(searchTerm);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
