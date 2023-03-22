import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ id, text, number, editHandler, deleteHandler }) => {
  return (
    <li
      className="flex items-center justify-between px-10 py-4 mt-3 rounded-lg bg-blue-300 cursor-pointer"
      id={id}
    >
      <span className="text-lg">{number + 1}</span>
      <span className="text-lg">{text}</span>
      <div className="buttons flex items-center text-xl gap-5">
        <BiEdit className="icon" onClick={() => editHandler(id)} />
        <AiFillDelete className="icon" onClick={() => deleteHandler(id)} />
      </div>
    </li>
  );
};

export default Todo;
