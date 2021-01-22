import React from 'react';
import './style.css';

const HoroscopoYear = () => {
  const buey = '/images/Buey.png';
  return (
    <article className=" content-background">
      <div className="background-article"></div>
      <div className="container-horo-art">
        <img src={buey} alt="buey" />
        <div className="horoscopo-container horoscopo-container-text">
          <h2 className="bodyTitleSingle">
            2021: Año del <b className="bodyTitle">Buey del Metal</b>
          </h2>
          <p className="bodyText">
          El Año Nuevo Chino de este 2021 será el Año del Búfalo o Buey, según el calendario chino este será un año próspero para todos los que nacieron bajo este signo. Se llenarán de buena energía en el campo de la finanzas y en sus próximos proyectos. 
          </p>
        </div>
      </div>
    </article>
  );
};

export default HoroscopoYear;
