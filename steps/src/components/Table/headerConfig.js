import  handleEditSvg from '../../assets/icons/handleEdit.svg'
import handleDelete from '../../assets/icons/handleDelete.svg'

const header =  [
    {
        id: 'time',
        title: 'Дата (ДД.ММ.ГГ)'
    },
    {
        id: 'distance',
        title: 'Пройдено км'
    },
    {
        id: 'action',
        title: 'Действия',
        template: (handleRemove, handleEdit, id) => {
            return <><div className="table__content-cell table__content-cell-icons">
            <div className="table__icon">
                <img src={handleEditSvg} onClick={() => handleEdit(id)} className="table__icon-img" data-element="handleEdit" alt="edit"/>
            </div>
            <div className="table__icon" onClick={() => handleRemove(id)}>
                <img src={handleDelete} className="table__icon-img" data-element="handleDelete" alt="delete"/>
            </div>
        </div></>
        }
    }   
]

export {header};