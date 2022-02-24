import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const types = ['image/jpeg', 'image/png'];

const Upload = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState('')

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if(selected && types.includes(selected.type)){
      setImg(selected);
      setError('')
    } else {
      setImg(null);
      setError('Please select a valid Image file');
    }
  }

  return (
      <form className="form">
        <label className="btn">
            <input type="file" onChange={handleChange}/>
            <i className="fa fa-cloud-upload"></i>&ensp;Upload
        </label>

        <div className="output">
          {error && <div>{error}</div>}
          {img && <div>{img.name}</div> }
          {img && <ProgressBar img={img} setImg={setImg} /> }
        </div>
      </form>
  ) 
};

export default Upload;
