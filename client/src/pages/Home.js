import AddTodo from "../components/AddTodo";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Home() {
  return (
    <main className="w-full">
      <section className="max-w-6xl mx-auto mt-2 mb-1">
        <Navbar />
        <AddTodo />
        <Table />
      </section>
    </main>
  );
}
