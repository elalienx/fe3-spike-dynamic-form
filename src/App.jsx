// Node modules
import { useState } from "react";

// Project files
import InputText from "./components/InputText";
import myBasicForm from "./data/myBasicForm.json";

export default function App() {
  // Local state
  const [form, setForm] = useState({ name: "", age: "" });

  // Methods
  function onSubmit(event) {
    event.preventDefault();
    alert(`Form submitted with: ${form.name}, ${form.age}`);
  }

  // Component
  const FormFields = myBasicForm.map((item) => (
    <InputText key={item.id} item={item} state={[form, setForm]} />
  ));

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        {FormFields}
        <button>Submit</button>
      </form>
    </div>
  );
}

/**
 * Goal: Dynamically create multiple input fields WITH INDIVIDUAL state
 * Challenges:
 *  1. Pass a unique state for each 🥇 ✅🎉
 *  2. Pass the right component to each
 */
