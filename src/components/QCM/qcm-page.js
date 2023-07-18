import { useParams} from "react-router-dom";
import useQuestOnce from "../../data/hooks/use-quest-once";
import LoadingSpinner from '../utile/loading-spinner';
import ErrorMessage from '../utile/error-message';
import QuestForm from "./quiz-form"

function StartQcm() {

    const {id} = useParams();
    const quest = useQuestOnce(id);
    if(quest.status === 'loading') return(<LoadingSpinner/>);
    if(quest.status === 'error') return (<ErrorMessage>something went wrong</ErrorMessage>)
    return (<QuestForm quizData={quest.data} />)
}

export default StartQcm;