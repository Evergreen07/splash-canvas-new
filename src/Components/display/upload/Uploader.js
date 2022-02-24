import React from 'react';
import { useState } from 'react/cjs/react.development';
import Upload from './Upload';

const Uploader = () => {
    const [openForm, setOpenForm] = useState(false);

    const handleClick = () => {
        setOpenForm(true);
    }
    
    return (
        <form className="form">
                <div className="btn" onClick={handleClick}>
                    <i class="fas fa-cloud-upload-alt"></i>
                    <h4 style={{fontFamily: 'Poppins, sans-serif'}}>&ensp;Upload </h4>
                </div>     
                {openForm && <Upload />}
        </form>
    )
};

export default Uploader;
