import React from 'react';
import './SearchFilters.css';

function SearchFilters() {
  return (
    <div className="search-filters">
      <div className="search-filters__filter">
        <input className="search-filters__input" placeholder="Search for channels, e.g. Google"/>
        <button className="search-filters__button">Search</button>
      </div>
      <div className="search-filters__filter">
        <label className="search-filters__label">Country</label>
        <div className="search-filters__select-container">
          <select className="search-filters__select">
            <option>All Countries</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchFilters;
