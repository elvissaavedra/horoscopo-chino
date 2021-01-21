import React from "react";
import "./index.css";

import { Loading } from "../../components/Loading/index";
import { Signs } from "./Signs";
import { Sign } from "./Sign";
import { SearchForm } from "./SearchForm";

import { Header } from "./Header";

import { ArrayHoroscope } from "../../shared/constant/ConstantHoroscope";
import useHoroscopeChinesse from "../../api/useHoroscopeChinesse";

import HoroscopoInfo from "../../components/Horoscopo/HoroscopoInfo";
import HoroscopoYear from "../../components/Horoscopo/HoroscopoYear";

export const PageZodiac = () => {
    const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();
    let dataHoroscope = horoscopeChinesse?.map((sign) =>
        sign?.data?.map((zodiacSign) => ({
            ...zodiacSign?.fields?.reduce((prev, current) => {
                prev[current.name] = current.value;
                return prev;
            }, {}),
            ...ArrayHoroscope.find((sign) => zodiacSign.fields.find((item) => item.name == "url").value == sign.url),
        }))
    )[0];
    console.log(dataHoroscope);
    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <Header />
            <Signs>{dataHoroscope && dataHoroscope.map((h, i) => <Sign key={i} title={h.title} linkRoute={h.image} />)}</Signs>
            <SearchForm />
            <HoroscopoInfo />
            <HoroscopoYear />
        </div>
    );
};
