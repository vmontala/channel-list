import React from 'react';
import './SearchFilters.css';

function SearchFilters() {
  return (
    <section className="search-filters">
      <div className="search-filters__filter">
        <input className="search-filters__input" placeholder="Search for channels, e.g. Google"/>
        <button className="search-filters__button" type="button">Search</button>
      </div>
      <div className="search-filters__filter">
        <label className="search-filters__label" htmlFor="country-filter">Country</label>
        <div className="search-filters__select-container">
          <select className="search-filters__select" id="country-filter" defaultValue={'All Countries'}>
            <option>All Countries</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilters;
