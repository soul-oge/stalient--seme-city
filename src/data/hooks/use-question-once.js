import { useEffect, useState } from 'react';
import {db} from "../../config/firebase"
import {collection, getDocs } from "firebase/firestore";

function useQuestionOnce(){
    const[questions, setQuestions] = useState({
        status:"loading",
        snapshot : null,
        error : null,
    });
    useEffect(() => {
        async function getCollection() {
            setQuestions({status: "loading", snapshot:null, error:null});
            try{
                const snapshot = await getDocs(collection(db, "Questionnaires"));;
                setQuestions({status: "success", snapshot, error: null});
            }catch(error) {
                console.error(error);
                setQuestions({status: "error", snapshot: null,error});
            }
        }
        getCollection();
    }, []);
    const {status, snapshot, error} = questions;
    let result = [];

    if(snapshot){
        result = snapshot.docs.map((docSnapshot) =>
        {
            return {
                id:docSnapshot.id,
                data: docSnapshot.data(),
            };
        })
    }
    return{
        status,
        error,
        result,
    };
}

export default useQuestionOnce;