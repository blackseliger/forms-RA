import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types'
import ImgBlock from '../ImgBlock/ImgBlock';

function DropArea() {

    const [files, setFiles] = useState([]);
    const inputRef = useRef();

    const onUploadImage = async () => {
        inputRef.current.click();
    }

    const onHandleChange = async () => {
        const files = await inputRef.current.files;
        
        const urls = await Promise.all([...files].map((file) => fileToDataUrl(file)))
        setFiles(prevFiles => [...prevFiles, urls]);
    }

    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
        
          fileReader.addEventListener('load', evt => {
            resolve(evt.currentTarget.result);
          });
          
          fileReader.addEventListener('error', evt => {
            reject(new Error(evt.currentTarget.error));
          });
          
          fileReader.readAsDataURL(file);
        });
      }
      



    return (
        <div className="drop-area">
            <form className="my-form">
                <p>Загрузите изображения с помощью диалога выбора файлов</p>
                <button onClick={onUploadImage} type="button" className="button button-primary-outline fit-content" name="uploadImage" data-element="uploadImage"><span>Выбрать изображения</span></button>
            </form>
           {files.length ? 
            <div id="gallery" className="gallery">{files.map((file) => <ImgBlock file={file}/>)}</div> :
            null   
        }
            <input className='fileElem' type='file' accept='image/*' onChange={onHandleChange}  ref={inputRef} />
        </div>
    )
}

DropArea.propTypes = {}

export default DropArea
