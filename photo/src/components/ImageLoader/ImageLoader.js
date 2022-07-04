import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DropArea from '../DropArea/DropArea';
import InputFile from '../InputFile/InputFile';

function ImageLoader(props) {
  
    return (
        <div className="container">
            <DropArea/>
        </div>
    )
}

ImageLoader.propTypes = {}

export default ImageLoader
