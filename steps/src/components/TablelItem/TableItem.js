import React from 'react'
import PropTypes from 'prop-types'
import { header as headerConfig } from '../Table/headerConfig'


function TableItem({item}) {

  const cells = headerConfig.map(({id, template}) => {
    return {
      id,
      template,
    }
  })

  
  let options = {  day: 'numeric', month: 'numeric', year: 'numeric', };


  return (cells.map(({id, template}) => {
    return template ? template() :
    <div className="table__content-cell">{id === 'time' ? item[id].toLocaleString('ru', options) : item[id]}</div>
  })
  )
}



TableItem.propTypes = {}

export default TableItem
