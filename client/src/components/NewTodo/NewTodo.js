import { useState } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addTodo, updateTodo } from "../../Api/apiHandler";

const NewTodo = ({ now, setTodo, todo, isUpdating, setIsUpdating }) => {
  const [text, setText] = useState("");
  const Navigate = useNavigate();

  function inputHandler(e) {
    setText(e.target.value);
  }

  function addingTodo() {
    text && addTodo(text, setTodo, todo);
    setText("");
    Navigate("/list");
  }

  function updatingTodo() {
    updateTodo(now, text, setTodo);
    setText("");
    setIsUpdating(false);
  }

  return (
    <div className="px-10 mt-3">
      <div className="flex items-center justify-between h-12 border-2 border-red-300 rounded-lg">
        <div className="input w-full rounded-lg h-full ">
          <input
            type="text"
            className="outline-none rounded-lg w-full h-full px-3"
            value={text}
            onChange={inputHandler}
          />
        </div>
        <button className="border-l-2 border-red-300 h-full" type="submit">
          {isUpdating ? (
            <MdUpdate
              onClick={updatingTodo}
              className="w-12 rounded-full h-8"
            />
          ) : (
            <AiFillFolderAdd
              onClick={addingTodo}
              className="w-12 rounded-full h-8"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default NewTodo;

// --------------------------------

/* <form
        onSubmit={isUpdating ? (e) => updateTodoFunc(e) : (e) => addTodoFunc(e)}
        className="flex items-center justify-between h-12 border-2 border-red-300 rounded-lg"
      > */

/* </form> */
