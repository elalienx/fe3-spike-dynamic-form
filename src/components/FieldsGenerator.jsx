// Project files
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

export default function FieldsGenerator({ data, state }) {
  // Component
  const Fields = data.map((item) => {
    switch (item.type) {
      case "email":
      case "number":
      case "password":
      case "text":
        return <InputText key={item.id} item={item} state={state} />;
      case "textarea":
        return <InputTextArea key={item.id} item={item} state={state} />;
      default:
        throw new Error(`The item type "${item.type}" is not valid`);
    }
  });

  return Fields;
}
