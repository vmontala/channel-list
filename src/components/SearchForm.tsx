import React, { FC, FormEvent, ChangeEvent} from 'react';
import './SearchForm.css';
import { ALL_COUNTRIES, DEFAULT_COUNTRY } from '../config';
import countries from '../data/countries';

interface Props {
  onFilter: (filter: object) => void,
};

const SearchForm: FC<Props> = ({
  onFilter,
}) => {
  /**
   * Triggered when submitting the search form that includes the search term input.
   * Prevents page refresh and sets the term filter on higher scope.
   *
   * @param {FormEvent} event - Submit event triggered on the form level.
   */
  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    const element = event.currentTarget.elements!.namedItem('search-term');

    event.preventDefault();

    if (element) {
      onFilter({ term: (element as HTMLInputElement).value });
    }
  };

  /**
   * Triggered when changing the country select.
   * Sets the term filter on higher scope.
   *
   * @param {FormEvent} event - Change event triggered on the select level.
   */
  const onChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    const element = event.currentTarget;

    if (element) {
      onFilter({ country: element.value });
    }
  };

  return (
    <section className="search-form">
      <form className="search-form__filter" onSubmit={onSearch}>
        <input
          name="search-term"
          className="search-form__input"
          placeholder="Search for channels, e.g. Google"
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
            {countries.map(country => (
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
