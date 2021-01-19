import React from 'react';
// import Buey from '../../../shared/images/Buey.png';

export const Sign = ({ title, linkRoute }) => {
  console.log(linkRoute);
  return (
    <div>
      <h3>{title}</h3>
      <img src={linkRoute} alt={title} />
    </div>
  );
};
