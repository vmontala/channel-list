import React, { FC, ReactElement } from 'react';
import './Pagination.css';
import { VISIBLE_PAGE_OFFSET } from '../config';
import { getAlwaysDisplayedPages } from '../utils/pagination';

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
  const alwaysDisplayedPages = getAlwaysDisplayedPages(pages, current);

  const isHiddenOnSmallerDevices = (page: number): boolean => (
    alwaysDisplayedPages.indexOf(page) === -1
  );

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
  ): ReactElement => {
    const classModifier = current === pageNumber
      ? ` pagination__action--${currentClassModifier}`
      : '';

    return (
      <button
        className={`pagination__action${classModifier}`}
        type="button"
        onClick={(): void => changePage(pageNumber)}
        aria-label={ariaLabel || `Page ${pageNumber}`}
        disabled={current === pageNumber}
      >
        {text || pageNumber}
      </button>
    );
  };

  /**
   * Renders a pagination item that represents the presence of hidden pages on mobile devices.
   *
   * @returns {ReactElement}
   */
  const renderMorePages = (): ReactElement => (
    <li
      className='pagination__page-item pagination__page-item--more'
      aria-label='More pages'
    >
      ...
    </li>
  );

  /**
   * Renders a the "more pages" item in case the current page is after the specified one (counting
   * also the configured page offset).
   *
   * @param {number} page - Page to check against if the item shall be rendered.
   *
   * @returns {ReactElement || null} - It returns null in case the condition does not match.
   */
  const renderMorePagesAfter = (page: number): ReactElement | null => (
    current - VISIBLE_PAGE_OFFSET <= page
    ? null
    : renderMorePages()
  );

  /**
   * Renders a the "more pages" item in case the current page is before the specified one (counting
   * also the configured page offset).
   *
   * @param {number} page - Page to check against if the item shall be rendered.
   *
   * @returns {ReactElement || null} - It returns null in case the condition does not match.
   */
  const renderMorePagesBefore = (page: number): ReactElement | null => (
    current + VISIBLE_PAGE_OFFSET >= page
    ? null
    : renderMorePages()
  );

  return (
    <nav className="pagination">
      {renderButton(firstPage, 'inactive', 'First Page', '«')}
      <ol className="pagination__page-list">
        {renderMorePagesAfter(firstPage)}
        {pages.map((page): ReactElement => {
          const hiddenClass = isHiddenOnSmallerDevices(page)
            ? ' pagination__page-item--hide'
            : '';

          return (
            <li
              key={page}
              className={`pagination__page-item${hiddenClass}`}
            >
              {renderButton(page, 'active')}
            </li>
          );
        })}
        {renderMorePagesBefore(lastPage)}
      </ol>
      {renderButton(lastPage, 'inactive', 'Last Page', '»')}
    </nav>
  );
}

export default Pagination;
