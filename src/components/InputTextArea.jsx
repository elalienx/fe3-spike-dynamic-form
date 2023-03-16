export default function InputTextArea({ item, state }) {
  const [form, setForm] = state;

  // Properties
  const formKey = [item.key];
  const formValue = form[item.key];

  return (
    <label>
      {item.label}
      <textarea
        // State
        value={formValue}
        onChange={(event) =>
          setForm({ ...form, [formKey]: event.target.value })
        }
        // Commpon properties
        required={required}
        disabled={disabled}
      ></textarea>
    </label>
  );
}
