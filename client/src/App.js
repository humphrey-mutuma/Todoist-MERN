import axios from "axios";
import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api/todos",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setTodos(res.data);
      console.log(todos);
    });
  }, [todos]);

  return (
    <main className="w-full">
      <Navbar />
      <section className="max-w-6xl mx-auto mt-2 mb-1">
        <AddTodo />
        <Table />
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>{todo.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
