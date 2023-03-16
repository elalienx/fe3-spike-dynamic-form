// Node modules
import { useState } from "react";

// Project files
import myBasicForm from "./data/myBasicForm.json";
import FieldsGenerator from "./components/FieldsGenerator";

export default function App() {
  // Local state
  const [form, setForm] = useState({ name: "", age: "", description: "" });

  // Methods
  function onSubmit(event) {
    event.preventDefault();
    alert(`Submisson: ${form.name}, ${form.age}, ${form.description}`);
  }

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <FieldsGenerator data={myBasicForm} state={[form, setForm]} />
        <button>Submit</button>
      </form>
    </div>
  );
}

/**
 * Goal: Dynamically create multiple input fields WITH INDIVIDUAL state
 * Challenges:
 *  1. Pass a unique state for each ✅
 *  2. Pass the right component to each ✅
 */
