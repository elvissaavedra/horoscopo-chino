import React, { useState } from 'react';
import './styles/SearchForm.css';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import 'moment-lunar';

const SearchForm = () => {
  const searchSign = (evt) => {
    evt.preventDefault();
    console.log('fecha', evt.target.elements.date.value)
    console.log('lunar', moment().year(1995).month(6).date(4).lunar().format('YYYY-MM-DD'));
    console.log(moment(evt.target.elements.date.value).lunar().format("YYYY"));
  };
  const [value, onChange] = useState(new Date());
  console.log('fecha', value)

  return (
    <div className="searchForm">
      <div className="searchForm__content">
        <div className="searchForm__description">
          <h5 className="headerSubtitle">¿QUIERES SABER QUÉ ANIMAL ERES EN EL HORÓSCOPO CHINO?</h5>
          <h5 className="headerSubtitle">INGRESA TU FECHA DE NACIMIENTO:</h5>
        </div>
        <form onSubmit={searchSign} className="searchForm__form">
          <DatePicker maxDate={new Date()} className="date" name="date" onChange={onChange} value={value} />
          <button type="submit">BUSCAR</button>
        </form>
      </div>
    </div>
  );
};

export { SearchForm };
