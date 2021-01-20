import React, { useState } from "react";
import "./styles/SearchForm.css";
import DatePicker from "react-date-picker";
const SearchForm = () => {
    const searchSign = (evt) => {
        evt.preventDefault();
        console.log(evt.target.elements.date.value);
    };
    const [value, onChange] = useState(new Date());

    return (
        <div className="searchForm">
            <div className="searchForm__description">
                <h3 className="headerTitle">¿QUIERES SABER QUÉ ANIMAL ERES EN EL HORÓSCOPO CHINO?</h3>
                <h4 className="headerSubtitle">INGRESA TU FECHA DE NACIMIENTO:</h4>
            </div>
            <form onSubmit={searchSign} className="searchForm__form">
                <DatePicker maxDate={new Date()} className="date" name="date" onChange={onChange} value={value} />
                <button type="submit">BUSCAR</button>
            </form>
        </div>
    );
};

export { SearchForm };
