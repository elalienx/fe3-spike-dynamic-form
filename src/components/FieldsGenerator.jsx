// Project files
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

export default function FieldsGenerator({ data, state }) {
  // Component
  const Fields = data.map((item) => {
    switch (item.type) {
      case "text":
        return <InputText key={item.id} item={item} state={state} />;
      case "number":
        return <InputText key={item.id} item={item} state={state} />;
      case "password":
        return <InputText key={item.id} item={item} state={state} />;
      case "textarea":
        return <InputTextArea key={item.id} item={item} state={state} />;
    }
  });

  return Fields;
}
