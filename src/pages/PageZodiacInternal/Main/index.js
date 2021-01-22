import React from 'react';

import './style.css';

export const Main = ({ data, sign }) => {
  const itemSign = data.filter((item) => item.url === sign)
  
  return (
    <div className="zodiacMain__content">
      {console.log('item', itemSign)}
      {itemSign?.map((sign) => (
        <div className="zodiacMain__contentText">
        <h1 className="bodyTitle">Características de {sign.header} en el horóscopo chino</h1>
        <p className="bodyText">
          La rata se infiltra en el corazón y el pensamiento: es el signo que más capacidad tiene para «hacerte el bocho» desde el primer instante que
          se cruza contigo. No hay escapatoria.
        </p>
        <p className="bodyText">Una rata que nace con amor, cuidado y educación podrá destacarse en la sociedad.</p>
        <p className="bodyText">
          La rata tiene un sex appeal que es marca registrada. Su caudal emocional, creativo y humano la convierte en un ser único e irremplazable.
        </p>
        <p className="bodyText">
          Es solitaria, sabe atravesar las pruebas que se le presentan, administrando con precisión su porvenir y condimentándolo con sentido del
          humor, creatividad y solvencia.
        </p>
        <p className="bodyText">
          La rata es ciclotímica: desde muy joven deberá tener contención, amigos, y especialistas que puedan decodificar su psiquis para no
          estancarse y evolucionar en su vocación. Se reinventará en la vida mil veces; tanto como quiera y pueda.
        </p>
        <p className="bodyText">
          Hogareña, cariñosa con hijos, nietos, hermanos y amigos, es una persona necesaria para pedirle consejos, ayuda, o su tiempo.
        </p>
        <p className="bodyText">En ambos sexos, la roedora crea dependencia emocional con su estilo de convivencia.</p>
        <p className="bodyText">
          Cuando está enamorada es abrumadora. Sabe tocar el punto G física y anímicamente, y seduce sin tregua. Es una gran compañera de la vida
          cotidiana y de viajes al exterior.
        </p>
        <p className="bodyText">
          Su memoria asombra; detallista, diseca situaciones y personas con agudeza y sentido del humor. Conoce las leyes y los códigos del barrio y
          del país y siempre se adelanta para sacar tajada en lo que pueda.
        </p>
      </div>
      ))}
      
    </div>
  );
};
