import React, { useEffect, useState } from 'react';
import ListTable from './ListTable/ListTable';
import axios from 'axios';
import ListTable2 from './ListTable/ListTable2';
//import { v4 as uuidv4 } from 'uuid';

const List = () => {

    // const [todos, setTodos] = useState ({ tasks: [] }); 
    const [todos, setTodos] = useState ([]);    
  
    
    useEffect (() => {        
      axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
          
          let todos = res.data;
          //let pagesCount = res.data.info.pages;
  
        //   if (todos.length > 0) {
        //     setIsLoading(false)
        //   }  else {
        //     return null}
          
            setTodos(todos);
            console.log(todos)
        })
    },[]);

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