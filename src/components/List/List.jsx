import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
//import ListTable from './ListTable/ListTable';
//import axios from 'axios';
import { todosAPI } from '../../API/api';
import { getTodosThunkCreator, setTodos } from '../../reducers/todosReducer';
import ListTable2 from './ListTable/ListTable2';
//import { v4 as uuidv4 } from 'uuid';

const List = () => {

    // const [todos, setTodos] = useState ([]);    
    
  
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
    

    

    // if (todos.length === 0) {
    //     return (
    //         <div className="loader"> <h3>folder is empty</h3></div>
    //     )
    // }

    const removeItem = (id) => {           
        setTodos(todos.filter((item) => item.id !== id));
    }

    return (
        <div className="table">
         
            {/* <ListTable setItem={setItem} addNewItem={addNewItem} items={items} 
                            removeItem={removeItem} item={item} 
                            onComplete={onComplete} /> */}               
                <div>List</div>
                 {/* <ListTable todos={todos} /> */}
                 <ListTable2 todos={todos} removeItem={removeItem} />
        </div>
    )
}

export default List;