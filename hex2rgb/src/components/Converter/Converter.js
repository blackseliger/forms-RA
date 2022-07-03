import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Converter(props) {

  const [search, setSearch] = useState('');
  const [label, setLabel] = useState('');

  let reg = /^#[0-9A-F]{6}$/i;

  const showError = () => {
    document.body.style.backgroundColor = 'tomato';
    setLabel('Ошибка!');
  }

  const hexToRgb = hex => {
    let value = hex;
    value = value.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16))

    return value.join(',');
  }


  const setColor = ({ target }) => {
    const value = target.value;
    setSearch(value);


    if (value.length < 7) {
      document.body.style.backgroundColor = 'white';
      setLabel('');
      return null;
    }

    if (value.length > 7 || !value.startsWith('#') || !reg.test(value)) {
      showError();
      return null;
    }

    const responce = hexToRgb(value);
    document.body.style.backgroundColor = 'rgb'.concat(`(${responce})`)
    setLabel('rgb'.concat(`(${responce})`))
   
  }


  return (
    <div className="form-group">
      <div className="form-group__input">
        <input className="form-group__control" type="text" id="input_success" placeholder="hex color" onChange={setColor} value={search} />
      </div>
      {label ? <label htmlFor="input_success" className="form-group__label">{label}</label> : null}
    </div>
  )
}

Converter.propTypes = {}

export default Converter
