import React from 'react';
import '../style.css'


const TableOfPlaces = ({ file }) => {

  const { filename, cities, countries } = file;

  return (
    <div className='bigSize'>
      File Name: {filename} <br />
      Cites: {cities.map(city => `${city.name}, `)} <br />
      Countries: {countries.map(country => `${country.name}, `)} <br />
    </div>
  )
};

export default TableOfPlaces;