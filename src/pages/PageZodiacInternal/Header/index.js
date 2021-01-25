import React from "react";

import { ArrayHoroscope } from "../../../shared/constant/ConstantHoroscope";

import { Carousel } from "../../../global/components/Carousel";

import "./style.css";

export const Header = ({ data, sign }) => {
    const itemSign = data.find((item) => item.url === sign);
    /* const titleSign = itemSign.map(ele => ele.header);
  const description = itemSign.map(ele => ele.description) */

    return (
        <div className="zodiacHeader__content">
            <img src={itemSign?.image} alt={itemSign?.header} className="zodiacHeader__image" />
            <h2 className="bodyTitle">{itemSign?.header}</h2>
            <p className="zodiacHeader__paragraph">{itemSign?.description}</p>
            <Carousel arrayItemCarousel={ArrayHoroscope} />
        </div>
    );
};
