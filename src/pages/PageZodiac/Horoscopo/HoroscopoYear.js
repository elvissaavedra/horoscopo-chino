import React from "react";
import "./style.css";

const HoroscopoYear = ({ sign }) => {
    console.log(sign);
    /* const buey = "/images/Buey.png"; */
    return (
        <article className=" content-background">
            <div className="background-article"></div>
            <div className="container-horo-art">
                <img src={sign.image} alt={sign.title} />
                <div className="horoscopo-container horoscopo-container-text">
                    <h2 className="bodyTitleSingle">
                        {new Date().getFullYear()}: Año del <b className="bodyTitle">{sign.header} del Metal</b>
                    </h2>
                    <p className="bodyText">{sign.description}</p>
                </div>
            </div>
        </article>
    );
};

export default HoroscopoYear;
