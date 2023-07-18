import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { doc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApwATzTTLk-IWH3svWZZ_YrV0KthZlDG8",
  authDomain: "test-ee3c7.firebaseapp.com",
  projectId: "test-ee3c7",
  storageBucket: "test-ee3c7.appspot.com",
  messagingSenderId: "1087877932956",
  appId: "1:1087877932956:web:09900da254bd861de38a59"
};

const app = initializeApp(firebaseConfig);
var db = getFirestore(app);

function getNewQuestId() {
  return  doc(collection(db, "Questionnaires")).id;
}

export const auth = getAuth(app);
export {db, getNewQuestId};
