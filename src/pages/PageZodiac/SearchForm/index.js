import React, { useState } from 'react';
import moment from 'moment';
import 'moment-lunar';

import { filter, find, map, pipe, prop } from 'ramda';

import { ArrayHoroscope } from '../../../shared/constant/ConstantHoroscope';

// import DatePicker from 'react-date-picker';

import './style.css';

let currentDay = moment().format('YYYY-MM-DD');

const SearchForm = ({ data }) => {
  const [inputDate, setInputDate] = useState(currentDay);

  const handleInputChange = (e) => {
    setInputDate(e.target.value);
  };

  const searchSign = (evt) => {
    evt.preventDefault();

    // console.log(inputDate.substr(0, 4));

    let searchS = pipe(
      find((x) => x.yearsCelebrated === 2021),
      map((x) => ArrayHoroscope)
    );
    console.log(searchS);
    // let moonYear = Number(moment(evt.target.elements.date.value).lunar().format('YYYY'));
    // console.log(
    //   data.find((sign) => {
    //     return (moonYear - sign.year) % 12 === 0;
    //   })
    // );
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
