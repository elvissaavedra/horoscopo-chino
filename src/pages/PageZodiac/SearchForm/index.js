import React, { useState } from 'react';
import moment from 'moment';

import { ArrayHoroscope, ArrayTypeHoroscope } from '../../../shared/constant/ConstantHoroscope';

import './style.css';

let currentDay = moment().format('YYYY-MM-DD');

const SearchForm = ({ data }) => {
  const [inputDate, setInputDate] = useState(currentDay);

  const handleInputChange = (e) => {
    setInputDate(e.target.value);
  };

  const searchSign = (evt) => {
    evt.preventDefault();

    let response,
      responseType,
      title,
      typeName = null;

    let yearSearch = parseInt(inputDate.substr(0, 4));
    let digitFinalyearSearch = parseInt(inputDate.substr(3, 4));

    ArrayHoroscope.forEach((object) => {
      response = object.yearsCelebrated.some((years) => years === yearSearch + 1);
      if (response) title = object.title;
    });

    ArrayTypeHoroscope.forEach((object) => {
      responseType = object.numberType.some((digit) => digit === digitFinalyearSearch);
      if (responseType) typeName = object.type;
    });

    console.log(data);
  };

  return (
    <div className="searchForm">
      <div className="searchForm__content">
        <div className="searchForm__description">
          <h5 className="headerSubtitle">¿QUIERES SABER QUÉ ANIMAL ERES EN EL HORÓSCOPO CHINO?</h5>
          <h5 className="headerSubtitle">INGRESA TU FECHA DE NACIMIENTO:</h5>
        </div>
        <form onSubmit={searchSign} className="searchForm__form">
          {/* <DatePicker maxDate={new Date()} className="date" name="date" onChange={onChange} value={value} /> */}
          <input
            name="input_zodiac"
            type="date"
            className="searchForm__inputDate"
            min="1900-01-01"
            max="2031-31-12"
            onChange={handleInputChange}
            defaultValue={currentDay}
          />
          <button type="submit">BUSCAR</button>
        </form>
      </div>
    </div>
  );
};

export { SearchForm };
