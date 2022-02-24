import React from 'react';

const Modal = ({modal, setModal}) => {

    const handleClick = (e) => {
        //For closing check if backdrop is clicked
        if(e.target.classList.contains('backdrop')){
            setModal(null);
        }
    }

    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={modal} alt="Modal Pic" />
        </div>
    )
};

export default Modal;
