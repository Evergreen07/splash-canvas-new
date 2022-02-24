import React, {useEffect} from 'react';
import useStorage from '../../../Hooks/useStorage';

const ProgressBar = ({img, setImg}) => {
  const {imgUrl, progress} = useStorage(img);
  console.log(progress, imgUrl);

  useEffect(() => {
    if (imgUrl) {
      setImg(null);
    }
  }, [imgUrl, setImg]);

  return (
    <div className="progress-bar" style={{width : progress + '%'}}></div>
  ) 
};

export default ProgressBar;
