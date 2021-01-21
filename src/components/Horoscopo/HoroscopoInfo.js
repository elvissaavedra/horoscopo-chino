import React from "react";

const HoroscopoInfo = () => (
  <section className="horoscopo-container">
    <h2 className="bodyTitle">¿Qué es el horóscopo Chino?</h2>
    <div className="horoscopo-container-text">
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        inventore consectetur dolore nulla non enim quos, quibusdam laudantium
        placeat totam aliquid, eos ipsa aspernatur ut sed neque et laboriosam
        maxime.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        laudantium expedita eligendi exercitationem repellat dolore quas
        suscipit et ratione velit, eaque, dignissimos explicabo iste earum
        deserunt assumenda placeat accusamus quibusdam! Aut, non qui.
        Accusantium ullam aut pariatur quasi officiis beatae dicta eaque quaerat
        consectetur earum, harum commodi esse incidunt distinctio.
      </p>
      <p>
        Los signos del horóscopo chino son:
        {" "} <a className="sign-link" href="#">Rata</a>, {" "}
        <a className="sign-link" href="#">Búfalo</a>, {" "}
        <a className="sign-link" href="#">Tigre</a>, {" "}
        <a className="sign-link" href="#">Conejo</a>, {" "}
        <a className="sign-link" href="#">Dragón</a>, {" "}
        <a className="sign-link" href="#">Serpiente</a>, {" "}
        <a className="sign-link" href="#">Caballo</a>, {" "}
        <a className="sign-link" href="#">Cabra</a>, {" "}
        <a className="sign-link" href="#">Mono</a>, {" "}
        <a className="sign-link" href="#">Gallo</a>, {" "}
        <a className="sign-link" href="#">Perro</a> y {" "}
        <a className="sign-link" href="#">Cerdo</a>. {" "}
        Y cada uno de ellos posee un elemento que puede ser Metal, Aire, Fuego, Tierra y Agua. 
      </p>
    </div>
  </section>
);

export default HoroscopoInfo;
