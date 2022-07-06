import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import { TrashIcon, EyeIcon, PencilAltIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/api/todos`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setTodos(res.data);
    });
  }, []);

  console.log(todos);
  return (
    <div className="flex flex-col container">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full  border shadow-lg m-2 rounded-md ">
              <thead className="bg-gray-500 rounded-md text-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Todo
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {todos ? (
                  todos?.map((todo) => (
                    <tr
                      key={todo._id}
                      className="bg-white border-b transition w-full duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {todo.name}
                      </td>

                      <td className="text-sm text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                        <Icons todoId={todo._id} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <Loading />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Icons = ({ todoId }) => {
  const [deleteTodo, setDeleteTodo] = useState({});

  const HandleDeleteTodo = () => {
    axios({
      method: "DELETE",
      url: `http://localhost:5000/api/todos/${todoId}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setDeleteTodo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log( "DELETED ",deleteTodo );

  return (
    <section className="flex items-center justify-center space-x-5">
      <Link to={`/details/${todoId}`}>
        <span className="text-gray-600 p-2">
          <EyeIcon className="h-5 w-5  border rounded-full" />
        </span>
      </Link>
      <Link to={`/edittodo/${todoId}`}>
        <span className="text-gray-600">
          <PencilAltIcon className="h-5 w-5" />
        </span>
      </Link>
      <span onClick={HandleDeleteTodo} className="text-gray-600 cursor-pointer">
        <TrashIcon className="text-red-500 h-5 w-5" />
      </span>
    </section>
  );
};
