// import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditTodo from "./pages/EditTodo";
import Home from "./pages/Home";

function App() {
  return (
    <main className="w-full">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<EditTodo />} />
      </Routes>
      {/* </BrowserRouter> */}
    </main>
  );
}

export default App;
