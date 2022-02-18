import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, deleteTodo, editTodo, getTodosThunkCreator, setCurrentPage } from '../../reducers/todosReducer';
import ListTable2 from './ListTable/ListTable2';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../UI/Loader/Loader';
import Modal from '../UI/Modal/Modal';
import { hideModal} from '../../reducers/appReducer';


const List = () => {

    const [inputValue, setInputValue] = useState ('');  
    
     
    const todos = useSelector( state => state.todos.todos )
    const currentPage = useSelector( state => state.todos.currentPage )
    const loader = useSelector( state => state.app.loader )
    const visibleModal = useSelector( state => state.app.visibleModal )
    const selectedItem = useSelector ( state => state.todos.selectedItem )
    const dispatch = useDispatch();

    
    useEffect (() => {    
        dispatch(getTodosThunkCreator());              
    }, []);

    
    const removeItem = (id) => {       
        dispatch(deleteTodo(id));
    }

    const hideModalOnClick = () => {
        dispatch(hideModal());
    }

    const editTodoOnClick = (obj) => {
        debugger
        dispatch(editTodo(obj))
        dispatch(hideModal());
    }

    const addNewItem = () => {
    
        if (inputValue.trim() !== '') {
            const newTodo = {
                userId: 11,
                id: uuidv4(),
                title: inputValue,
                completed: false
            }
            dispatch(addNewTodo (newTodo))
            setInputValue ('');
        } else {
            setInputValue ('');
        }            
    }

    const onPageChanged = (p) => {
        
        dispatch(setCurrentPage(p))
    }

    return (
        <div className="table">   
        
                 { visibleModal && <Modal hideModal={hideModalOnClick} item={selectedItem} editTodo={editTodoOnClick}/> }
                { loader ? <Loader /> :  <ListTable2 todos={todos} 
                                                     removeItem={removeItem} 
                                                     addNewItem={addNewItem} 
                                                     inputValue={inputValue}
                                                     setInputValue={setInputValue}
                                                     currentPage={currentPage} 
                                                     onPageChanged={onPageChanged} /> 
                }
        </div>
    )
}

export default List;