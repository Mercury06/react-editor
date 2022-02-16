import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
//import ListTable from './ListTable/ListTable';
//import axios from 'axios';
import { todosAPI } from '../../API/api';
import { deleteTodo, getTodosThunkCreator, setTodos } from '../../reducers/todosReducer';
import ListTable2 from './ListTable/ListTable2';
//import { v4 as uuidv4 } from 'uuid';

const List = () => {

    const [inputValue, setInputValue] = useState ('');  
    console.log(inputValue)
  
    const todos = useSelector( state => state.todos.todos )

    const store = useStore()
    console.log("from store:", store.getState())
    const dispatch = useDispatch();
  

    useEffect (() => {        
    //   axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
        // todosAPI.getTodos().then((res)=>{
          
        //   let todos = res.data;
          //let pagesCount = res.data.info.pages;
  
        //   if (todos.length > 0) {
        //     setIsLoading(false)
        //   }  else {
        //     return null}
          
        dispatch(getTodosThunkCreator());    
    },[]);
    

    

    const removeItem = (id) => {       
        
        dispatch(deleteTodo(id));
    }

    // const addNewItem = () => {
    //     if (item.trim() !== '') {
    //         const newItem = {
    //             id: uuidv4(),
    //             item: item,
    //             complete: false
    //         }
    //         setItems ((items) => [ ...items, newItem])
    //         setItem ('');
    //     } else {
    //         setItem ('');
    //     }            
    // }

    return (
        <div className="table">
         
            {/* <ListTable setItem={setItem} addNewItem={addNewItem} items={items} 
                            removeItem={removeItem} item={item} 
                            onComplete={onComplete} /> */}               
                <div>List</div>
                 {/* <ListTable todos={todos} /> */}
                 <ListTable2 todos={todos} 
                             removeItem={removeItem} 
                            //  addNewItem={addNewItem} 
                             inputValue={inputValue}
                             setInputValue={setInputValue} />
                 
        </div>
    )
}

export default List;