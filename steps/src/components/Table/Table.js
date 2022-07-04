import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from '../TableHeader/TableHeader'
import TableList from '../TableList/TableList'

function Table({ items, handleRemove, handleEdit }) {
    const filter = [...items].sort((a, b) => b.time.getTime() - a.time.getTime());

    return (
        <div className="table__content" data-element="tableContent">
            <TableHeader />
            <TableList items={filter} handleRemove={handleRemove} handleEdit={handleEdit}/>
        </div>
    )
}

Table.propTypes = {}

export default Table
