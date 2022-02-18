import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
//import ListTable from './ListTable/ListTable';
//import axios from 'axios';
//import { todosAPI } from '../../API/api';
import { addNewTodo, deleteTodo, editTodo, getTodosThunkCreator } from '../../reducers/todosReducer';
import ListTable2 from './ListTable/ListTable2';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../UI/Loader/Loader';
import Modal from '../UI/Modal/Modal';
import { hideLoader, hideModal, setModal } from '../../reducers/appReducer';
import Paginator from '../UI/Paginator/Paginator';

const List = () => {

    const [inputValue, setInputValue] = useState ('');  
     
    const todos = useSelector( state => state.todos.todos )
    const loader = useSelector( state => state.app.loader )
    const visibleModal = useSelector( state => state.app.visibleModal )
    const selectedItem = useSelector ( state => state.todos.selectedItem )
    const [currentPage, setCurrentPage] = useState(1);

    const store = useStore()
    console.log("from store:", store.getState())
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
        setCurrentPage(p)
    }

    return (
        <div className="table">
         
            {/* <ListTable setItem={setItem} addNewItem={addNewItem} items={items} 
                            removeItem={removeItem} item={item} 
                            onComplete={onComplete} /> */}               
                <div>List</div>
                 {/* <ListTable todos={todos} /> */}
                 <div className="paginator">
                    {/* <center><Paginator pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/></center> */}
                    <center><Paginator todos={todos} 
                                       currentPage={currentPage} 
                                       onPageChanged={onPageChanged} />
                    </center>
                </div> 
                 { visibleModal && <Modal hideModal={hideModalOnClick} item={selectedItem} editTodo={editTodoOnClick}/> }
                { loader ? <Loader /> :  <ListTable2 todos={todos} 
                                                     removeItem={removeItem} 
                                                     addNewItem={addNewItem} 
                                                     inputValue={inputValue}
                                                     setInputValue={setInputValue} /> 
                }
        </div>
    )
}

export default List;