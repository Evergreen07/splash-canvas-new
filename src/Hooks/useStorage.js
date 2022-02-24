import {db, storage} from '../Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp} from "firebase/firestore"; 
import {useState, useEffect} from 'react';

const useStorage = (file) => {
    const [progress, setProgress] = useState();
    const [error, setError] = useState();
    const [imgUrl, setImgUrl] = useState();


    useEffect(() => {
        //Create ref where the file is to be stored
        const storageRef = ref(storage, file.name);
        const collectionRef = collection(db, "images");

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            await getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
                setImgUrl(url);
                const payload = {
                    url : url,
                    createdAt : serverTimestamp()
                }
                addDoc(collectionRef, payload);
            })
        })
    }, [file]);
    
    return {progress, imgUrl, error};
};

export default useStorage;
