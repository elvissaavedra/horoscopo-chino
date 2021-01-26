import React from "react";
import { useParams } from "react-router-dom";

import { SearchForm } from "../PageZodiac/SearchForm";
import { Main } from "./Main";
import { Header } from "./Header";
import useHoroscopeChinesse from "../../api/useHoroscopeChinesse";
import { Loading } from "../../components/Loading/index";

export const PageZodiacInternal = () => {
    const { sign } = useParams();
    const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();

    if (isLoading) return <Loading />;

    return (
        <div className="container">
            <Header data={horoscopeChinesse} sign={sign} />
            <Main data={horoscopeChinesse} sign={sign} />
            <SearchForm data={horoscopeChinesse} />
        </div>
    );
};
