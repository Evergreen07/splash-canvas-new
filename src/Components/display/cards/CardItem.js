import React from 'react';

const CardItem = ({photo, setModal}) => {
  return (
    <div className="card">
          <img className="photo" variant="top" src={`${photo.url}`} alt="Uploaded Image" onClick={() => setModal(photo.url)}/>
    </div>
  ) 
};

export default CardItem;
