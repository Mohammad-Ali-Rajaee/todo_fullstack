import { useEffect, useState } from "react";
import { deleteTodo, getAllTodos } from "../../Api/apiHandler";
import NewTodo from "../NewTodo/NewTodo";
import Todo from "./Todo";

const List = () => {
  const [todo, setTodo] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  const [now, setNow] = useState("");

  useEffect(() => {
    getAllTodos(setTodo);
  }, []);

  function editHandler(id) {
    setIsUpdating(true);
    setNow(id);
  }
  function deleteHandler(id) {
    deleteTodo(id, setTodo);
  }

  return (
    <section className="p-todos w-full px-10">
      <NewTodo
        now={now}
        setTodo={setTodo}
        todo={todo}
        isUpdating={isUpdating}
        setIsUpdating={setIsUpdating}
      />
      <ul className="p-todos__list flex flex-col gap-2 w-full">
        {todo?.map((item, index) => {
          return (
            <Todo
              id={item._id}
              text={item.text}
              number={index}
              key={index}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default List;
