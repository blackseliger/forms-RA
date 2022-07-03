import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from '../TableHeader/TableHeader'
import TableList from '../TableList/TableList'

function Table({ items }) {
    const filter = [...items].sort((a, b) => b.time.getTime() - a.time.getTime());
    return (
        <div className="table__content" data-element="tableContent">
            <TableHeader />
            <TableList items={filter} />
        </div>
    )
}

Table.propTypes = {}

export default Table
