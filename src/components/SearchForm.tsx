import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__filter">
        <input className="search-form__input" placeholder="Search for channels, e.g. Google"/>
        <button className="search-form__button" type="button">Search</button>
      </div>
      <div className="search-form__filter">
        <label className="search-form__label" htmlFor="country-filter">Country</label>
        <div className="search-form__select-container">
          <select className="search-form__select" id="country-filter" defaultValue={'All Countries'}>
            <option>All Countries</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
