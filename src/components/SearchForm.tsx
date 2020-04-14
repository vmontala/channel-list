import React, { FC, FormEvent, ChangeEvent} from 'react';
import './SearchForm.css';

interface Props {
  onFilter: (filter: object) => void,
};

const SearchForm: FC<Props> = ({
  onFilter,
}) => {
  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    const element = event.currentTarget.elements!.namedItem('search-term');

    event.preventDefault();

    if (element) {
      onFilter({ term: (element as HTMLInputElement).value });
    }
  };

  const onChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    const element = event.currentTarget;

    event.preventDefault();

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
            defaultValue={'All Countries'}
            onChange={onChangeCountry}
          >
            <option>All Countries</option>
            <option value="NL">The Netherlands</option>
            <option value="ES">Spain</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
