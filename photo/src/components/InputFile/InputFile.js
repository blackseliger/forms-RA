import React, { useRef } from 'react'
import PropTypes from 'prop-types'

function InputFile({ inputShow, handleFiles }) {

    const fileRef = useRef();

    const handleClick = () => {
        fileRef.current.click();
        const files = fileRef.current.files;

        if (files) {
            handleFiles(files)
        }
    }

    return (
        <>
            {inputShow && <input type='file' accept='image/*' onClick={handleClick} ref={fileRef} />}
        </>
    )
}

InputFile.propTypes = {}

export default InputFile
