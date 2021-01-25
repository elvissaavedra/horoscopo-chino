import React from "react";

import useHoroscopeChinesse from "../../api/useHoroscopeChinesse";

import { Signs } from "./Signs";
import { Sign } from "./Sign";
import { SearchForm } from "./SearchForm";
import { Loading } from "../../components/Loading/index";
import HoroscopoInfo from "./Horoscopo/HoroscopoInfo";
import HoroscopoYear from "./Horoscopo/HoroscopoYear";
import { Header } from "./Header";
// import { Button } from '../../shared/components/Button';

import "./index.css";

export const PageZodiac = () => {
    const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();
    if (isLoading) return <Loading />;
    const currentSign = horoscopeChinesse?.find((sign) => {
        return (new Date().getFullYear() - sign.year) % 12 === 0;
    });
    return (
        <div className="container">
            <Header />
            <Signs>{horoscopeChinesse && horoscopeChinesse.map((h, i) => <Sign key={i} title={h.title} linkRoute={h.image} url={h.url} />)}</Signs>
            <SearchForm data={horoscopeChinesse} />
            <HoroscopoInfo />
            <HoroscopoYear sign={currentSign} />
        </div>
    );
};
