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
        template: () => {
            return <><div className="table__content-cell table__content-cell-icons">
            <div className="table__icon">
                <img src="./assets/icons/handleEdit.svg" className="table__icon-img" data-element="handleEdit" alt="edit"/>
            </div>
            <div className="table__icon">
                <img src="./assets/icons/handleDelete.svg" className="table__icon-img" data-element="handleDelete" alt="delete"/>
            </div>
        </div></>
        }
    }   
]

export {header};