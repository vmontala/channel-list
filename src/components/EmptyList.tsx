import React, { ReactElement } from 'react';
import './Empty.css';

const Empty = (): ReactElement => {
  return (
    <section className="empty-list">
      No channels found
    </section>
  );
};

export default Empty;
