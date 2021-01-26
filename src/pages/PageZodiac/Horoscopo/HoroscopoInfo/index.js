import React from 'react';

import Table from '../../../../components/Table';

import '../style.css';

export const HoroscopoInfo = () => (
  <section className="horoscopo-container">
    <h2 className="bodyTitle">¿QUÉ ES EL HORÓSCOPO CHINO?</h2>
    <div className="horoscopo-container-text">
      <p className="">
        En China, entre las artes más antiguas de adivinación, la astrología es una de las que más destaca. Incluso,
        existen muchos estudios y documentos que hablan sobre su origen y el uso de los doce animales que representan
        cada uno de los signos zodiacales.
      </p>
      <p>
        El horóscopo chino, al igual que en la astrología occidental, se basa en las fechas de nacimiento para
        establecer diferentes características de personalidad. No obstante, si uno quisiera tener una carta natal
        completa es necesario conocer la hora y el lugar de nacimiento.
      </p>
      <h3 className="bodySubtitle">¿Cuál es el origen del horóscopo chino?</h3>
      <p>
        Una leyenda muy popular explica el origen del Horóscopo Chino. El Emperador de Jade, gobernante del cielo según
        la mitología china, organizó una carrera de animales para definir quiénes de ellos formarían parte del zodiaco.
        Las posiciones serían ocupadas por aquellos que lograron cruzar un río y el orden en que llegaron a la meta.
      </p>
      <h3 className="bodySubtitle">¿Cómo saber qué animal soy en el horóscopo chino?</h3>
      <p>Para saber el signo de una persona en el Horóscopo Chino basta con identificar su año de nacimiento:</p>
      <Table />
      <h3 className="bodySubtitle">¿Cuáles son los elementos del horóscopo chino?</h3>
      <p>Metal: años terminados en 0 o 1.</p>
      <p>Agua: años terminados en 2 o 3.</p>
      <p>Madera: años terminados en 4 o 5.</p>
      <p>Fuego: años terminados en 6 o 7.</p>
      <p>Tierra: años terminados en 8 o 9.</p>
    </div>
  </section>
);
