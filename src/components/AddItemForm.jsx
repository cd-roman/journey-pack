import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        data-test="new-item-input"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        name="itemText"
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
