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
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse vitae at numquam cumque, eveniet
            deleniti doloremque minima corporis totam eos accusamus possimus mollitia, dolorem tempore aliquid hic ut
            nemo consectetur quidem itaque dolores ex repellat. Reprehenderit quibusdam voluptate quo enim quae harum
            quis eveniet! Dicta dolor mollitia officiis optio. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quos architecto eaque quisquam quam libero voluptates deleniti eum sed quod earum tempora odio cupiditate
            temporibus impedit, magni velit fuga. Dolorum, iure!
          </p>
        </div>
      </div>
    </article>
  );
};

export default HoroscopoYear;
