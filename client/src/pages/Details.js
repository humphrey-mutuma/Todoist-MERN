import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [todoDetails, setTodoDetails] = useState("");

  // read todo id from react-router params
  let { todoId } = useParams();

  // fetch a particular todo from the database
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/todos/${todoId}`)
      .then((res) => {
        setTodoDetails(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [todoId]);

  return (
    <div>
      <h1>Details</h1>
      <h1>Todo : {todoDetails} </h1>
    </div>
  );
}
