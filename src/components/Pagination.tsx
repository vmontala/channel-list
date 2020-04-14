import React, { FC } from 'react';
import './Pagination.css';

interface Props {
  current: number,
  pages: number[],
  changePage: (page: number) => void,
};

const Pagination: FC<Props> = ({
  current,
  pages,
  changePage,
}) => {
  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];

  /**
   * Renders a pagination button, either first/last or any of the pages.
   * The button is disabled in case of referring to the current page.
   *
   * @param {number} pageNumber - Page that the button refers to.
   * @param {string} currentClassModifier - Class to be added as modifier in case the button refers to the current page (active|inactive).
   * @param {string} [ariaLabel] - Custom aria-label property value, default is "Page <pageNumber>".
   * @param {string} [text] - Custom text to show on the button, default is "<pageNumber>".
   *
   * @returns {ReactElement}
   */
  const renderButton = (
    pageNumber: number,
    currentClassModifier: string,
    ariaLabel?: string,
    text?: string
  ) => {
    const classModifier = current === pageNumber
      ? ` pagination__action--${currentClassModifier}`
      : '';

    return (
      <button
        className={`pagination__action${classModifier}`}
        type="button"
        onClick={() => changePage(pageNumber)}
        aria-label={ariaLabel || `Page ${pageNumber}`}
        disabled={current === pageNumber}
      >
        {text || pageNumber}
      </button>
    );
  };

  return (
    <nav className="pagination">
      {renderButton(firstPage, 'inactive', 'First Page', '«')}
      <ol className="pagination__page-list">
        {pages.map(page => (
          <li className="pagination__page-item" key={page}>
            {renderButton(page, 'active')}
          </li>
        ))}
      </ol>
      {renderButton(lastPage, 'inactive', 'Last Page', '»')}
    </nav>
  );
}

export default Pagination;
