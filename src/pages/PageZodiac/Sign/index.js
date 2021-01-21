import React from 'react';

import './index.css';

export const Sign = ({ title, linkRoute }) => {
  return (
    <div className="sign__content">
      <img className="sign__image" src={linkRoute} alt={title} />
      <h3 className="sign__title signTitle">{title}</h3>
    </div>
  );
};
