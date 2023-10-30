import { useEffect, useState } from 'react';
import {db} from "../../config/firebase"
import { doc, getDoc, deleteDoc,setDoc} from "firebase/firestore";

function useQuestOnce(sessionId) {
    const[questState, setQuestState] = useState({
        status:"loading",
        snapshot : null,
        error : null,
    });
    useEffect(() => {
        async function getQuest() {
            setQuestState({status: "loading", snapshot:null, error:null});
            try{
                const docRef = doc(db, "Questionnaires", sessionId);
                const snapshot = await getDoc(docRef);
                setQuestState({status: "success", snapshot, error: null});
            }catch(error) {
                console.error(error);
                setQuestState({status: "error", snapshot: null,error});
            }
        }
        getQuest();
    }, [sessionId]);
    const {status, snapshot, error} = questState;
    let id;
    let exists;
    let data;
    if (snapshot) {
        id = snapshot.id;
        exists = snapshot.exists;
        data = snapshot.data();        
    }
    const setQuest = async(newData) => {
        setQuestState((prev)=>({...prev, status: "updating", error:null}));
        try {
            const docRef = doc(db, "Questionnaires", sessionId);
            await setDoc(docRef,newData,{merge: true});
            setQuestState({status: "success", snapshot: null, error: null});
        } catch(error){
            console.error(error);
            setQuestState((prev)=>({...prev, status: "error", error}));
        }
    }
    const deleteQuest = async() => {
        setQuestState((prev)=>({...prev, status: "deleting", error:null}));
        try {
            const docRef = doc(db, "Questionnaires", sessionId);
            await deleteDoc(docRef);
            setQuestState({status: "deleted", snapshot: null, error: null});
        } catch(error){
            console.error(error);
            setQuestState((prev)=>({...prev, status: "error", error}));
        }
    }
    return {
        status,
        error,
        id,
        exists,
        data,
        set: setQuest,
        delete: deleteQuest,
    };
}

export default useQuestOnce