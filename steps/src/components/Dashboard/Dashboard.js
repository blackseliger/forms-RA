import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormGroup from '../FormGroup/FormGroup'
import Table from '../Table/Table'
import TableItemModel from '../../models/TableItem'

function Dashboard(props) {

    const [form, setForm] = useState({ date: '', distance: '' });
    const [items, setItems] = useState([new TableItemModel('2022-03-20', 13), new TableItemModel('2022-02-20', 20), new TableItemModel('2022-04-20', 16)]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const duplicate = items.find((item) => item.time === new Date(form.date))

        duplicate !== undefined ? duplicate.distance = + form.distance : setItems((prevItems) => [...prevItems, new TableItemModel(form.date, form.distance)])
        evt.target.reset();
        return setForm({ date: '', distance: '' })
    }

    const handleChange = (name, value) => {
        console.log(name, value);
       return setForm((prevForm) => ({...prevForm, [name]: value}))
    }

    return (
        <div className="container" data-element="tableEdit">
            <FormGroup handleSubmit={handleSubmit} handleChange={handleChange} />
            <Table items={items} />
        </div>
    )
}

Dashboard.propTypes = {}

export default Dashboard
