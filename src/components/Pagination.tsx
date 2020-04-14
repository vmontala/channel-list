import React from 'react';
import './Pagination.css';

interface Props {
  current: number,
  pages: number[],
  onClickPage: (page: number) => void,
}

const Pagination: React.FC<Props> = ({
  current,
  pages,
  onClickPage,
}) => {
  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];

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
        onClick={() => onClickPage(pageNumber)}
        aria-label={ariaLabel || `Page ${pageNumber}`}
        disabled={current === pageNumber}
      >
        {text || pageNumber}
      </button>
    );
  }

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
