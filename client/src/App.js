import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditTodo from "./pages/EditTodo";
import Home from "./pages/Home";

function App() {
  return (
    <main className="w-full">
      <section >
        {/* <BrowserRouter> */}
        <Home />
        {/* <EditTodo /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditTodo />} />
        </Routes> */}
        {/* </BrowserRouter>  */}
      </section>
    </main>
  );
}

export default App;
