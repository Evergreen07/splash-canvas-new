import React from 'react';
import CardItem from './CardItem';
import useFirestore from '../../../Hooks/useFirestore';

const Cards = ({setModal}) => {
  const { photos } = useFirestore('images');
  
  const posts = [
    { 
      id : 1,
      photo : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      title : 'Awesome Pic',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas'
    },
    { 
      id : 2,
      photo : 'https://images.pexels.com/photos/4241412/pexels-photo-4241412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title : 'Nice Pic',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas'
    },
    { 
      id : 3,
      photo : 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Single-Boys-Whatsapp-Dp-Pics-Photo.jpg',
      title : 'Cool Pic',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas'
    },
    { 
      id : 4,
      photo : 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
      title : 'Awesome Pic',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas'
    },
    { 
      id : 5,
      photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3rrYSBc4VI0TWKQe-fZOj8F1x7WANdPH_xmJtRPpvWVnETrciGYeET3F3mrwege39wI&usqp=CAU',
      title : 'Nice Pic',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas'
    }
  ];
    
  return (
    <div className="display">
        {photos.map((photo) => (
            <CardItem key={photo.id} photo={photo} setModal={setModal}/>
        ))}
    </div>
  )
};

export default Cards;
