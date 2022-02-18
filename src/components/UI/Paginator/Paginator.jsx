import React, { useState } from 'react';
import './Paginator.scss'
import cn from 'classnames';


let Paginator = ({ todos, portionSize=10, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(todos.length / portionSize);
    //console.log("pagesCount:", pagesCount)
    
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push (i);
        } 

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    
     
    
    return <div className = "paginator">
        {portionNumber > 1 &&
            <button onClick = { () => { setPortionNumber(portionNumber - 1)}} className="button">prev</button>}
        {pages.filter ( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
              .map ( (p) => {
                return <span className = { cn ({ selectedPage : currentPage === p }, "pageNumber")}                          
                             key = {p}
                             onClick = { (e) => {onPageChanged (p)}}> {p} </span>})}
        {portionCount > portionNumber &&
            <button onClick = { () => {setPortionNumber (portionNumber + 1)}} className="button">next</button>} </div>}

export default Paginator;