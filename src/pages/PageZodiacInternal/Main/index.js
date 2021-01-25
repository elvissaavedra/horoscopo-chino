import React from 'react';

import './style.css';

export const Main = ({ data, sign }) => {
  const itemSign = data.filter((item) => item.url === sign);

  return (
    <div className="zodiacMain__content">
      {itemSign?.map((sign, i) => (
        <div key={i} className="zodiacMain__contentText">
          <h1 className="bodyTitle">CARACTERÍSTICAS</h1>
          <p className="bodyText">{sign.description}</p>
          <h4 className="headerSubtitle">¿Cómo es el {sign.header} en el horóscopo chino?</h4>
          <p className="bodyText">{sign.howIs}</p>
          <h4 className="headerSubtitle">Personalidad del {sign.header}</h4>
          <p className="bodyText">{sign.personality}</p>
          <h4 className="headerSubtitle">Elemento fijo: </h4>
          <p className="bodyText">{sign.fixedElement}</p>
          <h4 className="headerSubtitle">Años de nacimiento del {sign.header}</h4>
          <p className="bodyText">{sign.yearsOfBirth}</p>
          <h4 className="headerSubtitle">Predicciones del {sign.header}</h4>
          <p className="bodyText">Amor: {sign.predictions.love}</p>
          <p className="bodyText">Dinero: {sign.predictions.money}</p>
          <p className="bodyText">Salud: {sign.predictions.health}</p>
          <h4 className="headerSubtitle">Colores de la suerte del {sign.header}</h4>
          <p className="bodyText">{sign.luckyColors}</p>
          <h4 className="headerSubtitle">Números de la suerte del {sign.header}</h4>
          <p className="bodyText">{sign.luckyNumbers}</p>
          <h4 className="headerSubtitle">¿Qué significa el {sign.header}?</h4>
          <p className="bodyText">{sign.whatItMeans}</p>
        </div>
      ))}
    </div>
  );
};
