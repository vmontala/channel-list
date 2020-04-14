import React from 'react';
import './Pagination.css';

function Pagination() {
  return (
    <nav className="pagination">
      <button className="pagination__action pagination__action--inactive" type="button" disabled>«</button>
      <ol className="pagination__page-list">
        <li className="pagination__page-item">
          <button className="pagination__action pagination__action--active" type="button" disabled>1</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">2</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">3</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">4</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">5</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">6</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">7</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">8</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">9</button>
        </li>
        <li className="pagination__page-item">
          <button className="pagination__action" type="button">10</button>
        </li>
      </ol>
      <button className="pagination__action" type="button">»</button>
    </nav>
  );
}

export default Pagination;
