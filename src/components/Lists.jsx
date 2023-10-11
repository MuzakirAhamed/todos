import { useEffect, useState } from "react";
import { useTodos } from "../context/TodoContext";
import Button from "./Button";

export default function Lists() {
  const [editTodo, setEditTodo] = useState(true);
  const { todolist, handledelete, updateTodos, handleCheckbox, getTodos } =
    useTodos();
  // const [editText, setEditText] = useState([]);
  // const [checkedItems, setCheckedItems] = useState(values.map(() => false));

  function handleChange(id, e) {
    // if (!todolist) return null;
    // setChecked(!checked)
    let checked = e.target.checked;
    handleCheckbox(id, checked);
  }
  function handleUpdate(id, e) {
    setEditTodo(!editTodo);
    updateTodos(id, e.target.value);
  }
  // function handleEdit(e) {
  // //  setEditText(e.target.value)
  // console.log(e.target.value)
  // }

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(todolist));
    },
    [todolist]
  );
  
  return (
    <div>
      {todolist.map((item, index) => {
        return (
          <div key={index} className="flex items-center">
            <div
              className={`flex my-1 sm:w-[400px] w-11/12 px-3 py-1 space-x-2 border rounded-lg ${
                item.completed
                  ? "bg-green-500 line-through duration-700 ease-in-out transition-all"
                  : "bg-yellow-400 duration-700 ease-in-out transition-all"
              }`}
            >
              <input
                type="checkbox"
                // value={checked}
                onChange={(e) => handleChange(item.id, e)}
              ></input>
              <input
                className="font-semibold text-lg outline-none bg-transparent"
                // onChange={(e) => handleEdit(e)}
                value={item.post}
                readOnly={editTodo}
              ></input>
            </div>
            <Button type="delete" onclick={() => handledelete(item.id)}>
              ❌
            </Button>
            <Button type="update" onclick={(e) => handleUpdate(item.id, e)}>
              {editTodo ? "✏" : "📁"}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
