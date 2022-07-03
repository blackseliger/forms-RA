import React, { useState } from 'react'
import PropTypes from 'prop-types'


function FormGroup({handleSubmit, handleChange}) {

    const [ date, setDate ] = useState('');
    const [ distance, setDistance ] = useState('');

    const onInput = ({target}) => {
        let {name, value} = target;

        if (name === 'date') {
            setDate(value);
            handleChange(name, date);
        }

        handleChange(name, value);
       
       
    }

    const onSubmit = (evt) => {
        return handleSubmit(evt);
    }




    return (
        <form onSubmit={onSubmit} className="form-group" data-element="productForm">
            <label htmlFor="name" className="form-group__label">Дата (ДД.ММ.ГГ)</label>
            <div className="form-group__input">
                <input onChange={onInput} className="form-group__control" name="date" type="date"  required placeholder="Дата" />
            </div>
            <label htmlFor="price" className="form-group__label">Пройдено км</label>
            <div className="form-group__input">
                <input  onChange={onInput} className="form-group__control" name="distance" type="number"step={0.1} min={0} required placeholder="Киломметры" />
            </div>
            <div className="form-group__buttons">
                <button name="save" className="button button_primary">
                    ОК
                </button>
            </div>
        </form>
    )
}

FormGroup.propTypes = {}

export default FormGroup
