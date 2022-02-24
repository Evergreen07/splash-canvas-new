import { useState, useEffect } from 'react';
import { collection, orderBy, onSnapshot, query } from "firebase/firestore"; 
import { db } from '../Firebase';

const useFirestore = ( myCollection ) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        
        const collectionRef = collection(db, myCollection);
        const myQuery = query(collectionRef, orderBy("createdAt", "desc"));
        onSnapshot(myQuery, (snapShot) => {
            let pics = [];
            snapShot.docs.forEach((doc) => {
                pics.push({...doc.data(), id: doc.id})
            })
            setPhotos(pics);
        })
            
        
    }, [myCollection])

    return { photos }
}

export default useFirestore