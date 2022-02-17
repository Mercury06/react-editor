import React from 'react';
import './Modal.scss';

const Modal = ({ hideModal, item }) => {

    // const rootClasses = [s.modal]
   
    // if (visibleModal) {
    //     rootClasses.push(s.active);
    // }

    return (
        // <div className={rootClasses.join(' ')} onClick={()=>hideModal()}>
            <div className="active_modal">
                <div className="modalContent" onClick={(e)=>e.stopPropagation()}>    
                    <div className="infoBlock">
                        
                        <div className="descriptionBlock">                      
                            <p><b>Id: </b></p>
                            <p><b>Name: </b></p>
                            <p><b>gender: </b></p>
                        
                            <button className="button" onClick={hideModal} > Cancel </button>&nbsp;
                            <button className="button" onClick={hideModal} > Apply </button>
                        </div> 
                        
                    </div>     
            </div>
        </div>
    )
}

export default Modal;