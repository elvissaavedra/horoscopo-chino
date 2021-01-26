import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import moment from 'moment';

import { ArrayHoroscope, ArrayTypeZodiac } from '../../../shared/constant/ConstantHoroscope';

import './style.css';
import { toLower } from 'ramda';

let currentDay = moment().format('YYYY-MM-DD');

const SearchForm = ({ data }) => {
  let history = useHistory();
  const [inputDate, setInputDate] = useState(currentDay);

  const handleInputChange = (e) => {
    setInputDate(e.target.value);
  };

  const searchSign = (evt) => {
    evt.preventDefault();

    let yearZodiac = parseInt(inputDate.substr(0, 4));
    let digitFinalYearZodiac = parseInt(inputDate.substr(3, 4));

    let response,
      responseYear,
      title,
      typeName = null;

    ArrayHoroscope.forEach((object) => {
      response = object.yearsCelebrated.some((years) => years === yearZodiac);
      if (response) title = object.title;
    });

    ArrayTypeZodiac.forEach((object) => {
      responseYear = object.typeNumber.some((type) => type === digitFinalYearZodiac);
      if (responseYear) typeName = object.typeName;
    });

    history.push(`/horoscopo-${title.toLowerCase()}`);
  };

  return (
    <div>
      <div className="searchForm">
        <div className="searchForm__content">
          <div className="searchForm__description">
            <h5 className="headerSubtitle">¿QUIERES SABER QUÉ ANIMAL ERES EN EL HORÓSCOPO CHINO?</h5>
            <h5 className="headerSubtitle">INGRESA TU FECHA DE NACIMIENTO:</h5>
          </div>
          <form onSubmit={searchSign} className="searchForm__form">
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
    </div>
  );
};

export { SearchForm };
