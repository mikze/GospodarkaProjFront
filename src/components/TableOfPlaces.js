import React from 'react';
import '../style.css'


const TableOfPlaces = ({ cities, countries }) => {

  return (
    <div className='bigSize'>
      Cites: {cities.map(city => `${city.name} x${city.TotalCount} `)} <br />
      Countries: {countries.map(country => `${country.name} x${country.TotalCount}, `)} <br />
    </div>
  )
};

export default TableOfPlaces;