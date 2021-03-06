import React, { FC, ReactElement, useRef, FormEvent, ChangeEvent } from 'react';
import './SearchForm.css';
import { ALL_COUNTRIES, DEFAULT_COUNTRY } from '../config';
import countries from '../data/countries';

interface Props {
  onFilter: (filter: object) => void,
};

const SearchForm: FC<Props> = ({
  onFilter,
}) => {
  const searchTerm = useRef<HTMLInputElement>(null);

  /**
   * Triggered when submitting the search form that includes the search term input.
   * Prevents page refresh and sets the term filter on higher scope.
   *
   * @param {FormEvent} event - Submit event triggered on the form level.
   *
   * @returns {void}
   */
  const onSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (searchTerm && searchTerm.current) {
      onFilter({ term: searchTerm.current.value });
    }
  };

  /**
   * Triggered when changing the country select.
   * Sets the term filter on higher scope.
   *
   * @param {FormEvent} event - Change event triggered on the select level.
   *
   * @returns {void}
   */
  const onChangeCountry = (event: ChangeEvent<HTMLSelectElement>): void => {
    const element = event.currentTarget;

    if (element) {
      onFilter({ country: element.value });
    }
  };

  return (
    <section className="search-form">
      <form className="search-form__filter" onSubmit={onSearch}>
        <label className="search-form__label" htmlFor="search-term">
          Search term
        </label>
        <input
          id="search-term"
          name="search-term"
          className="search-form__input"
          placeholder="Search for channels, e.g. Google"
          ref={searchTerm}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
      <div className="search-form__filter">
        <label className="search-form__label" htmlFor="country-filter">
          Country
        </label>
        <div className="search-form__select-container">
          <select
            className="search-form__select"
            id="country-filter"
            defaultValue={DEFAULT_COUNTRY}
            onChange={onChangeCountry}
          >
            <option>{ALL_COUNTRIES}</option>
            {countries.map((country): ReactElement => (
              <option
                key={country.key || country.label}
                value={country.key || country.label}
              >
                {country.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
