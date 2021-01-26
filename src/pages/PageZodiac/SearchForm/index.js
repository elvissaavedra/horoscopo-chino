import React, { useState } from "react";
import "./style.css";

import DatePicker from "react-date-picker";
import { useHistory } from "react-router-dom";
const SearchForm = ({ data }) => {
    let history = useHistory();
    const searchSign = (evt) => {
        evt.preventDefault();
        let moonYear = new Date(evt.target.elements.date.value).getFullYear() + 1;
        let dataFiltered = data?.find((sign) => {
            return (moonYear - sign.year) % 12 === 0;
        });
        console.log(moonYear);
        if (dataFiltered) {
            history.push(`/horoscopo-${dataFiltered.url}`);
        }
    };
    const [value, onChange] = useState(new Date());

    return (
        <div className="searchForm">
            <div className="searchForm__content">
                <div className="searchForm__description">
                    <h5 className="headerSubtitle">¿QUIERES SABER QUÉ ANIMAL ERES EN EL HORÓSCOPO CHINO?</h5>
                    <h5 className="headerSubtitle">INGRESA TU AÑO DE NACIMIENTO:</h5>
                </div>
                <form onSubmit={searchSign} className="searchForm__form">
                    <DatePicker maxDetail="decade" format="yyy" minDate={new Date("01/01/1900")} maxDate={new Date()} className="date" name="date" onChange={onChange} value={value} />
                    <button type="submit">BUSCAR</button>
                </form>
            </div>
        </div>
    );
};

export { SearchForm };
