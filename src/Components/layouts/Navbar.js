import React from 'react';

const Navbar = () => {

    return (
        <div className="nav">
            <div href="#home" className="nav-head">
                <i className="fas fa-leaf"></i> &ensp;
                <span style={{color:'cyan'}}>S</span>plash 
                <span style={{color:'cyan'}}>C</span>anvas
            </div>
            
            <i className="fas fa-home fa-lg" style={{marginRight : '5rem', marginTop : '0.2rem'}}></i>
        </div>
    )
};

export default Navbar;
