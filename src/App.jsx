// Node modules
import { useState } from "react";
import InputText from "./components/InputText";

// Project files
import Inputtext from "./components/InputText";
import myBasicForm from "./data/myBasicForm.json";

export default function App() {
  // Local state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Methods
  function onSubmit(event) {
    event.preventDefault();

    alert(`Form submitted with: ${name}, ${age}`);
  }

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <InputText item={myBasicForm[0]} state={[name, setName]} />
        <InputText item={myBasicForm[1]} state={[age, setAge]} />
        <button>Submit</button>
      </form>
    </div>
  );
}
