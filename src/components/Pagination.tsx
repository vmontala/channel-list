import React from 'react';
import './Pagination.css';

function Pagination() {
  return (
    <nav className="pagination">
      <button className="pagination__action pagination__action--inactive" type="button" aria-label="First page" disabled>«</button>
      <ol className="pagination__page-list">
        <li className="pagination__page-item">
          <button className="pagination__action pagination__action--active" type="button" aria-label="Page 1" disabled>1</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 2">2</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 3">3</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 4">4</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 5">5</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 6">6</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 7">7</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 8">8</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 9">9</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button" aria-label="Page 10">10</button>
        </li>
      </ol>
      <button className="pagination__action" type="button" aria-label="Last page">»</button>
    </nav>
  );
}

export default Pagination;
