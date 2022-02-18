import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ hideModal, editTodo, item }) => {

    const[form, setForm] = useState({ 
        userId: item.userId, 
        id: item.id, 
        title: "",
        completed: "" 
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (

            <div className="active_modal" onClick={hideModal} >
                <div className="modalContent" onClick={(e)=>e.stopPropagation()}>    
                    <div className="infoBlock">
                        
                        <div className="descriptionBlock">      
                            <form>             
                                <p><b>Task: </b>&nbsp;<input onChange={changeHandler} type="text" name="title" placeholder={item.title} /></p>
                                { item.completed ? <center><b>TASK COMPLETED</b></center> :
                                <p><b>Completed </b><input onChange={changeHandler} type="radio" name="completed" value="true" /></p>}
                            </form>   
                            <div className="button_block">
                                <button className="button" onClick={hideModal} > Cancel </button>
                                <button className="button" onClick={() => editTodo({...form})} > Apply </button>
                            </div>
                        </div> 
                        
                    </div>     
            </div>
        </div>
    )
}

export default Modal;