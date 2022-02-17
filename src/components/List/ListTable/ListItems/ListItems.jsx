import React from 'react';
import { EditItem, RemoveIcon } from '../../../UI/Icons/Boxicons';
import "./../ListTable.scss";

const ListItems = ({ id, userId, title, completed, onItem, removeItem }) => {
    
    const editItem = () => {
        onItem ({ userId, id, title, completed })
    }      

    return (
        <div>
             <ul className="list-group mb-0">
            
              <li key={id+userId}  className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                        
                        <label for="scales" className="labelCl" >
                            <b>{id}</b>&nbsp; &nbsp; {title}                    
                        </label>  
        
                    </div>
                    <div className="edit_item" title="Edit item" onClick={ editItem } ><EditItem /></div>
                    <div className="remove_icon" title="Remove item" onClick={() => removeItem(id)}><RemoveIcon /></div>
              </li>
           
            </ul>
        </div>
    )

}

export default ListItems;