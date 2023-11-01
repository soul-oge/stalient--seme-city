import { useState } from "react";
import "./edit-custom.css";
import CreateQuestion from "./CreateQuestion";

const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
function Form({ onSubmit, disabled, children }) {
    return (
      <form onSubmit={onSubmit} className="mx-24 max-w-3xl">
        <fieldset disabled={disabled} className="form__fieldset-wrapper">
          {children}
        </fieldset>
      </form>
    );
  }
  
  function TextInput({ label, name, value, onChange }) {
    return (
      <div className="form__block">
        <label htmlFor={name} className="form__label">
          {label}:
        </label>
        <input
          className="form__field"
          placeholder={label}
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  function SelectInput({ label, name, options, value, onChange }) {
    return (
      <div className="form__block">
        <label htmlFor={name} className="form__label">
          {label}:
        </label>
        <select id={name} name={name} value={value} onChange={onChange} className="form__field">
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

function QuizForm({ initialData = {}, onSave, onDelete, isSaving }) {
  console.log(initialData);
  const [formValues, setFormValues] = useState({
    Titre: initialData.Catégories ?? "",
    description: initialData.description ?? "",
    questions: initialData.questions || [],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  const onTitleChange = (e) => {
    setFormValues((prev) => {
      return { ...prev, Titre: e.target.value };
    });
  };
  const onDescriptionChange = (e) =>
    setFormValues((prev) => ({ ...prev, description: e.target.value }));

    const addQuestion = () => {
      setFormValues((prev) => ({
        ...prev,
        questions: [
          ...prev.questions,
          {
            question: '',
            coefficient: 1,
            sous_categorie: '',
            type : 'choix-multiple',
            answers: [],
          },
        ],
      }));
    };
    const onQuestionChange = (e, index) => {
      const newQuestions = [...formValues.questions];
      newQuestions[index].question = e.target.value;
      setFormValues((prev) => ({
        ...prev,
        questions: newQuestions,
      }));
    };
  
    const onCoefficientChange = (e, index) => {
      const newQuestions = [...formValues.questions];
      newQuestions[index].coefficient = e.target.value;
      setFormValues((prev) => ({
        ...prev,
        questions: newQuestions,
      }));
    };
    const onSubcategoryChange = (e, index) => {
      const newQuestions = [...formValues.questions];
      newQuestions[index].sous_categorie = e.target.value;
      setFormValues((prev) => ({
        ...prev,
        questions: newQuestions,
      }));
    };
  
    const addAnswer = (index) => {
      const newQuestions = [...formValues.questions];
      newQuestions[index].answers.push({
        text: '',
        score: 0,
      });
      setFormValues((prev) => ({
        ...prev,
        questions: newQuestions,
      }));
    };
    const onAnswerChange = (e, questionIndex, answerIndex) => {
      const newQuestions = [...formValues.questions];
      newQuestions[questionIndex].answers[answerIndex].text = e.target.value;
      setFormValues((prev) => ({
        ...prev,
        questions: newQuestions,
      }));
    };
  
    const onScoreChange = (e, questionIndex, answerIndex) => {
      const newQuestions = [...formValues.questions];
      newQuestions[questionIndex].answers[answerIndex].score = e.target.value;
      setFormValues((prev) => ({
        ...prev,
        questions: newQuestions,
      }));
    };

  return (
    <Form onSubmit={onSubmit} disabled={isSaving}>
      <h2>Quiz Info</h2>
      <TextInput label="Title" name="title" value={formValues.title} onChange={onTitleChange} />
      <TextInput
        label="Description"
        name="description"
        value={formValues.description}
        onChange={onDescriptionChange}
      />
      {/* <SelectInput
        label="Difficulty"
        name="difficulty"
        options={difficultyOptions}
        value={formValues.difficulty}
        onChange={onDifficultyChange}
      /> */}
      <h2>Questions</h2>
      {formValues.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>Question {questionIndex + 1}</h3>
          <div>
          <label className="form__label"> Coefficient </label>
          <input
            type="number"
            placeholder="Coefficient"
            value={question.coefficient}
            onChange={(e) => onCoefficientChange(e, questionIndex)}
          />
          </div>
          <TextInput
            label="Sous-categorie"
            name="Sous-categorie"
            value={question.sous_categorie}
            onChange={(e) => onSubcategoryChange(e, questionIndex)}
          />
          <label className="form__label"> Question</label>
          <textarea
            className="w-3/4 p-2 rounded border"
            placeholder="Question"
            value={question.question}
            onChange={(e) => onQuestionChange(e, questionIndex)}
          />
          <h4>Réponses :</h4>
          <ul>
            {Array.isArray(question.answers) && question.answers.map((answer, answerIndex) => (
              <li key={answerIndex}>
                <label className="form__label"> Score </label>
                <div>
                <input
                  type="number"
                  placeholder="Score"
                  value={answer.score}
                  onChange={(e) => onScoreChange(e, questionIndex, answerIndex)}
                />
                </div>
                <label className="form__label"> Reponse {answerIndex + 1}</label>
                <textarea
                  className="w-3/4 p-2 rounded border"
                  placeholder="Réponse"
                  value={answer.text}
                  onChange={(e) => onAnswerChange(e, questionIndex, answerIndex)}
                />
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => addAnswer(questionIndex)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
            Ajouter une réponse
          </button>
        </div>
      ))}
      <button type="button" onClick={addQuestion}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
        Ajouter une question
      </button>
      <p>TODO!</p>
      <div className="quiz-form__buttons">
        <button type="submit">Save Quiz</button>
        <button type="button" onClick={onDelete}>
          Delete Quiz
        </button>
      </div>
    </Form>
  );
}

export default QuizForm;
