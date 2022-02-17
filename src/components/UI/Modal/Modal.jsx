import React from 'react';
import s from './Modal.scss';

const Modal = ({ visible, setModal, hideModal, selectedId }) => {

    const rootClasses = [s.modal]
   
    if (visible) {
        rootClasses.push(s.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>hideModal()}>
            <div className={s.modalContent} onClick={(e)=>e.stopPropagation()}>    
            <div className={s.infoBlock}>
                <div className={s.avaBlock}>    
                    {/* <div><img src={} style={{ width: '180px', height: '180px' }}/></div> */}
                </div>
                <div className={s.descriptionBlock}>                      
                <p><b>Id: </b></p>
                <p><b>Name: </b></p>
                <p><b>gender: </b></p>
                
                <button className={s.button} onClick={()=>hideModal()} > Back to list</button>
                </div> 
                
            </div>     
            </div>
        </div>
    )
}

export default Modal;