export default function InputText({ item, state }) {
  const [value, setValue] = state;

  return (
    <label className="input-text">
      {item.label}
      <input
        // State
        value={value}
        onChange={(event) => setValue(event.target.value)}
        // Common properties
        type={item.type}
        required={item.required}
        disabled={item.disabled}
        placeholder={item.placeholder}
        // Specific properties
        maxLength={item.maxLength}
        min={item.min}
        max={item.max}
      />
    </label>
  );
}
