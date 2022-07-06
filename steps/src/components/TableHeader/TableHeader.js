import React from 'react'
import PropTypes from 'prop-types'
import { header as headerConfig } from '../Table/headerConfig'



function TableHeader(props) {
    return (
        <div className="table__content-header-row  table__content-row">
            {headerConfig.map(({title}) => {
                return <div className="table__content-cell" key={title}><span>{title}</span></div>
            })}
        </div>
    )
}

TableHeader.propTypes = {}

export default TableHeader
