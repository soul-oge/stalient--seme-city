import { useState } from "react";
import "./edit-custom.css";

const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
function Form({ onSubmit, disabled, children }) {
    return (
      <form onSubmit={onSubmit}>
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
  const [formValues, setFormValues] = useState({
    title: initialData.title ?? "",
    description: initialData.description ?? "",
    difficulty: initialData.difficulty ?? "easy",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  const onTitleChange = (e) => {
    setFormValues((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const onDescriptionChange = (e) =>
    setFormValues((prev) => ({ ...prev, description: e.target.value }));
  const onDifficultyChange = (e) =>
    setFormValues((prev) => ({ ...prev, difficulty: e.target.value }));

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
      <SelectInput
        label="Difficulty"
        name="difficulty"
        options={difficultyOptions}
        value={formValues.difficulty}
        onChange={onDifficultyChange}
      />
      <h2>Questions</h2>
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