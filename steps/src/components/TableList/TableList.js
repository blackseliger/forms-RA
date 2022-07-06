import React from 'react'
import PropTypes from 'prop-types'
import TableItem from '../TablelItem/TableItem';

function TableList({items, handleRemove, handleEdit}) {
    return (
        <div className="table__content-body" data-element="body">
            {items.map((item) => {
                return (
                    <div className="table__content-body-row table__content-row" key={item.id} ><TableItem  item={item} handleEdit={handleEdit} handleRemove={handleRemove} /></div>
                )
            })}
        </div>
    )
}

TableList.propTypes = {}

export default TableList
