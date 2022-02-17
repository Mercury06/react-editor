import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../../reducers/todosReducer';
import { EditItem, RemoveIcon } from '../../UI/Icons/Boxicons';
import ListItems from './ListItems/ListItems';
//import { RemoveIcon } from '../../Icons/Boxicons';
import "./ListTable.scss";



const ListTable2 = ({todos, removeItem, addNewItem, inputValue, setInputValue}) => {

    const dispatch = useDispatch();

    const onAddToModal = (obj) => {
       
        dispatch(setSelectedItem (obj))
    }
    //debugger
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
            { todos && todos.length !== 0 
                ? todos.map((item) => {
                    return (
                <ListItems key = {item.id+item.userId}
                           id={item.id}
                           userId={item.userId}
                           title={item.title}
                           completed={item.completed}
                           removeItem={removeItem} 
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