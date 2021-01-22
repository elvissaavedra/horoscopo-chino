import React from "react";

import useHoroscopeChinesse from "../../api/useHoroscopeChinesse";

import { Signs } from "./Signs";
import { Sign } from "./Sign";
import { SearchForm } from "./SearchForm";
import { Loading } from "../../components/Loading/index";
import HoroscopoInfo from "./Horoscopo/HoroscopoInfo";
import HoroscopoYear from "./Horoscopo/HoroscopoYear";
import { Header } from "./Header";
import { Button } from "../../global/components/Button";

import "./index.css";

export const PageZodiac = () => {
    const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();
    let dataHoroscope = horoscopeChinesse;
    if (isLoading) return <Loading />;
    console.log("🚀home", horoscopeChinesse)

    return (
        <div className="container">
            <Header />
            <Signs>{dataHoroscope && dataHoroscope.map((h, i) => <Sign key={i} title={h.title} linkRoute={h.image} />)}</Signs>
            <SearchForm data={dataHoroscope} />
            <HoroscopoInfo />
            <HoroscopoYear />
            <Button />
        </div>
    );
};
