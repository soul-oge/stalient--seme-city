import { useParams} from "react-router-dom";
import {useState} from "react"
import useQuestOnce from "../../data/hooks/use-quest-once";
import LoadingSpinner from '../utile/loading-spinner';
import ErrorMessage from '../utile/error-message';
import {getNewQuestId} from '../../config/firebase'
import QuizForm from "./edit-custom"


function EditQcm() {

    const {id} = useParams();
    const isNew = id ==="new";
    const [questId] = useState(isNew ?getNewQuestId() : id)
    const quest = useQuestOnce(questId);
    console.log(questId);

    const saveQuest = (newQuizData) => {
        const data = { ...newQuizData};
        quest.set(data);
    };
    const deleteQuest = () => {
        quest.delete();
    };
  if (quest.status === "loading") {
    return <LoadingSpinner />;
  }

  let message;
  if (quest.status === "deleting") message = <p>Deleting...</p>;
  else if (quest.status === "deleted") message = <p>Deleted!</p>;
  else if (quest.status === "error") message = <p>Something went wrong. Please try again.</p>;

    return (
    <main>
        <h1>Edit Qcm</h1>
        <p>Is this a new quest ? {isNew ? "yes" : "No"}</p>
        <p>Quest status: {quest.status}</p>
        <QuizForm 
            initialData ={quest.data} 
            onSave={saveQuest}
            onDelete={deleteQuest}
            isSaving={quest.status === "updating"}
            />
        {/* <button onClick = {quest.delete}>Delete</button>
        <button onClick = {() =>quest.set({Titre: "update"})}>Update</button> */}
    </main>
    );
}

export default EditQcm;