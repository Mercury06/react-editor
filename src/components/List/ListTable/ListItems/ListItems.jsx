import React from 'react';
import { EditItem, RemoveIcon } from '../../../UI/Icons/Boxicons';
//import { RemoveIcon } from '../../Icons/Boxicons';
import "./../ListTable.scss";

const ListItems = ({todos, removeItem}) => {

    return (
        <div>
             <ul className="list-group mb-0">
            { todos && todos.map((item) => {
                return (
              <li key={item.id}  className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                    
                    <label for="scales" className="labelCl" >
                        <b>{item.id}</b>&nbsp; &nbsp; {item.title}
                   
                    </label>  
    
                </div>
                {/* <div className={s.removeIcon} title="Remove item" onClick={() => removeItem(i.id)}><RemoveIcon /></div> */}
                <div className="edit_item" title="Edit item" ><EditItem /></div>
                <div className="remove_icon" title="Remove item" onClick={() => removeItem(item.id)}><RemoveIcon /></div>
              </li>)
            })}
            </ul>
        </div>
    )

}

export default ListItems;