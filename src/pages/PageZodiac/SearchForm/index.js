import React, { useState } from "react";
import "./style.css";

import DatePicker from "react-date-picker";
import moment from "moment";
import "moment-lunar";
import { useHistory } from "react-router-dom";
const SearchForm = ({ data }) => {
    let history = useHistory();
    const searchSign = (evt) => {
        evt.preventDefault();
        let moonYear = Number(moment(evt.target.elements.date.value).lunar().format("YYYY"));
        let dataFiltered = data?.find((sign) => {
            return (moonYear - sign.year) % 12 === 0;
        });
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
                    <h5 className="headerSubtitle">INGRESA TU FECHA DE NACIMIENTO:</h5>
                </div>
                <form onSubmit={searchSign} className="searchForm__form">
                    <DatePicker format="dd / MM / yyy" maxDate={new Date()} className="date" name="date" onChange={onChange} value={value} />
                    <button type="submit">BUSCAR</button>
                </form>
            </div>
        </div>
    );
};

export { SearchForm };
