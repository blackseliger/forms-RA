import React from 'react'
import PropTypes from 'prop-types'
import TableItem from '../TablelItem/TableItem';

function TableList({items}) {
    
    return (
        <div className="table__content-body" data-element="body">
            {items.map((item) => {
                return (
                    <div className="table__content-body-row table__content-row"><TableItem item={item} /></div>
                )
            })}
        </div>
    )
}

TableList.propTypes = {}

export default TableList
