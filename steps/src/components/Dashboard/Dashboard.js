import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormGroup from '../FormGroup/FormGroup'
import Table from '../Table/Table'
import TableItemModel from '../../models/TableItem'

function Dashboard(props) {

    const [form, setForm] = useState({ date: '', distance: '' , editID: ''});
    const [items, setItems] = useState([new TableItemModel('2022-03-20', 13), new TableItemModel('2022-02-20', 20), new TableItemModel('2022-04-20', 16)]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const duplicate = items.findIndex((item) => item.time.getTime() === new Date(form.date).getTime())

        duplicate !== -1 ?
        setItems(prevItems => prevItems.map((item, index) => {
            const editDistanse = form.distance + item.distance;
            console.log(item);
            return index === duplicate?  new TableItemModel(form.date, editDistanse) : item
        })) :
       setItems((prevItems) => [...prevItems, new TableItemModel(form.date, form.distance)]);

        evt.target.reset();
        setForm({ date: '', distance: '' })
    }

    const handleChange = (name, value) => {
       return setForm((prevForm) => ({...prevForm, [name]: value}));
    }

    const handleRemove = id => {
        setItems(prevItems => prevItems.filter((item) => item.id !== id));
    }

    const handleEdit = id => {
        const editedItem = items.find((item) => item.id === id);
        setForm((prevForm) => ({date: editedItem.time.toISOString().split('T')[0], distance: editedItem.distance}))

    }


    return (
        <div className="container" data-element="tableEdit">
            <FormGroup handleSubmit={handleSubmit} handleChange={handleChange} value = {form}/>
            <Table items={items} handleRemove={handleRemove} handleEdit={handleEdit}/>
        </div>
    )
}

Dashboard.propTypes = {}

export default Dashboard
