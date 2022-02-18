import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../reducers/appReducer';
import { setSelectedItem } from '../../../reducers/todosReducer';
import ListItems from './ListItems/ListItems';
import cn from 'classnames';
import "./ListTable.scss";



const ListTable2 = ({todos, removeItem, portionSize=10, addNewItem, inputValue, setInputValue, currentPage, onPageChanged}) => {

    const dispatch = useDispatch();

    const onAddToModal = (obj) => {         
        dispatch(setSelectedItem (obj))
        dispatch(setModal(true))
    }
    let pagesCount = Math.ceil(todos.length / portionSize);    
    
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push (i);
    } 

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let prevPortion = currentPage*portionSize;
    let firstPortion = prevPortion - portionSize;
    let paginatedTodos = todos.slice(firstPortion, prevPortion)  
    
    return (
        <> 
            <section className="vh-100" >          
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card" >        
          <div className="card-body p-5">
            <h6 className="mb-3">Add somethig to list </h6> 
            
            <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg text-warning"></i></a>

            <form className="d-flex justify-content-center align-items-center mb-4">
              <div className="form-outline flex-fill">
                <input type="text" form="form1" value={inputValue} placeholder="Enter something..." className="form-control form-control-lg" 
                       onChange={(e) => setInputValue (e.target.value)}  />
                {/* <input type="text" form="form1"  placeholder="Enter something..." className="form-control form-control-lg" 
                        /> */}
                
              </div>
              <button type="button" className="btn btn-primary btn-lg ms-2" onClick={addNewItem} >Add</button>
              {/* <button type="button" className="btn btn-primary btn-lg ms-2" >Add</button> */}
            </form>


            <div className = "paginator">
        {portionNumber > 1 &&
            <button onClick = { () => { setPortionNumber(portionNumber - 1)}} className="button">prev</button>}
        {pages.filter ( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
              .map ( (p) => {
                return <span className = { cn ({ selectedPage : currentPage === p }, "pageNumber")}                          
                             key = {p}
                             onClick = { () => {onPageChanged (p, paginatedTodos)}}> {p} </span>})}
        {portionCount > portionNumber &&
            <button onClick = { () => {setPortionNumber (portionNumber + 1)}} className="button">next</button>} </div>
            
            { paginatedTodos && paginatedTodos.length > 0  
                ? paginatedTodos.map((item) => {
                    return (
                        <ListItems key = {item.id+item.userId}
                                   id={item.id}
                                   userId={item.userId}
                                   title={item.title}
                                   completed={item.completed}
                                   removeItem={removeItem}
                                   setModal={setModal}
                                   setItem={setSelectedItem} 
                                   onItem={(obj) => onAddToModal (obj)} />
                    )
                })
                : <div className="loader"> <h3>list is empty</h3></div>
            }
            
           

              
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


        </>  )}

export default ListTable2;