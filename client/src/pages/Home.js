import AddTodo from "../components/AddTodo";
import Table from "../components/Table";

export default function Home() {
  return (
    <main className="w-full">
      <section className="max-w-7xl mx-auto mt-2 mb-1">
        <AddTodo />
        <Table />
      </section>
    </main>
  );
}
