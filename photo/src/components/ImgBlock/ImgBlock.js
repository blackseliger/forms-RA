import React from 'react'

function ImgBlock({ file }) {
    console.log(file);

    return (
        <> 
            <img src={file} alt='#'/>
        </>
       
    )
}

export default ImgBlock