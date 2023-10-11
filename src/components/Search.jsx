import { useState } from "react";
import Button from "./Button";
import { useTodos } from "../context/TodoContext";
export default function Search() {
  const [addValue, setAddValue] = useState("");
  const { handleAdd } = useTodos();
  function handleSubmit(e) {
    e.preventDefault();
    handleAdd(addValue);
  }
  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 flex-wrap">
          <input
            type="text"
            className="border rounded-lg border-stone-800 px-2 py-1 sm:w-96 w-11/12 mb-2"
            placeholder="Add items...."
            value={addValue}
            onChange={(e) => setAddValue(e.target.value)}
          ></input>
          <Button type="add">Add</Button>
        </div>
      </form>
    </div>
  );
}
