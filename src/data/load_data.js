import { db } from "../config/firebase";
import questions from "./question_data";
import { collection, doc, setDoc } from "firebase/firestore"; 

async function loadSampleData() {
  console.log("Loading sample quizzes into firestore...");

  for (let quizData of questions) {
    const newCityRef = doc(collection(db, "Questionnaires"));
    try {
        await setDoc(newCityRef, quizData);
    } catch (error) {
      console.error(error);
      console.error("Could not load sample data!");
      return;
    }
  }

  console.log("Done loading sample quizzes!");
}

export default loadSampleData;