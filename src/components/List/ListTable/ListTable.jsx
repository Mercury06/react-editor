import React from 'react';
//import { RemoveIcon } from '../../Icons/Boxicons';
import * as ReactBootstrap from "react-bootstrap";
import "./ListTable.scss";



const ListTable = ({ todos }) => {
 
    return (
        <div> 
          <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Edit panel</th>
                    </tr>
                </thead>                
                <tbody>
                { todos && todos.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? "completed" : null}</td>
                        <td></td>
                    </tr>
                    ))
                }   
                </tbody>)
                
            </ReactBootstrap.Table>
        </div>  )}

export default ListTable;