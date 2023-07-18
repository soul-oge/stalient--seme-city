import { useEffect, useState } from 'react';
import {db} from "../../config/firebase"
import { doc, getDoc, deleteDoc,setDoc} from "firebase/firestore";

function userOnce(userId) {
    const[userState, setUserState] = useState({
        status:"loading",
        snapshot : null,
        error : null,
    });
    const setQuest = async(newData) => {
        setUserState((prev)=>({...prev, status: "updating", error:null}));
        try {
            const docRef = doc(db, "users", userId);
            await setDoc(docRef,newData,{merge: true});
            setUserState({status: "success", snapshot: null, error: null});
        } catch(error){
            console.error(error);
            setUserState((prev)=>({...prev, status: "error", error}));
        }
    }
    const deleteQuest = async() => {
        setUserState((prev)=>({...prev, status: "deleting", error:null}));
        try {
            const docRef = doc(db, "users", userId);
            await deleteDoc(docRef);
            setUserState({status: "deleted", snapshot: null, error: null});
        } catch(error){
            console.error(error);
            setUserState((prev)=>({...prev, status: "error", error}));
        }
    }
    return {
        set: setQuest,
        delete: deleteQuest,
    };
}

export default userOnce;