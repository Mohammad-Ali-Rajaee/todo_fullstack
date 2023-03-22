import axios from "axios";
const baseUrl = "http://localhost:5000";

function getAllTodos(setTodo) {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      setTodo(data);
    })
    .catch((err) => console.log(err));
}

function addTodo(text, setTodo, todo) {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(({ data }) => {
      setTodo([...todo, data]);
    })
    .catch((err) => console.log(err));
}

function updateTodo(id, text, setTodo) {
  axios
    .post(`${baseUrl}/update`, { _id: id, text })
    .then(({ data }) => {
      getAllTodos(setTodo);
    })
    .catch((err) => console.log(err));
}

function deleteTodo(id, setTodo) {
  axios
    .post(`${baseUrl}/delete`, { _id: id})
    .then(() => {
      getAllTodos(setTodo);
    })
    .catch((err) => console.log(err));
}

export { getAllTodos, addTodo, updateTodo, deleteTodo };
