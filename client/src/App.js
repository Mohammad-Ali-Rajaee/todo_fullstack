import Header from "./components/Header/Header";
import List from "./components/List/List";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewTodo from "./components/NewTodo/NewTodo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/new" element={<NewTodo />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
