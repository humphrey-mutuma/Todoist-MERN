import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input, styled } from "@nextui-org/react";
import axios from "axios";

export default function EditTodo() {
  const [todoDetails, setTodoDetails] = useState("");
  const [editedTodo, setEditedTodo] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // get todo to edit from react-router params
  const { todoId } = useParams();

  // get the particular todo from the database
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

  // handle todo edit
  const onSubmit = (data) => {
    setEditedTodo(data.name);
    reset();
  };
  // update todo on the database
  useEffect(() => {
    axios
      .put(`http://localhost:5000/api/todos/${todoId}`, {
        name: editedTodo,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [editedTodo, todoId]);

  // update a todo
  return (
    <div className="container bg-gray-50 p-5">
      <h1>Edit Todo and Submit</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-2 mt-5 flex flex-col w-fit "
      >
        <Input
          aria-label="Close"
          clearable
          contentRightStyling={false}
          placeholder={todoDetails}
          status="primary"
          {...register("name", { required: true })}
          contentRight={
            <SendButton>
              <SendIcon />
            </SendButton>
          }
        />

        {/* errors will return when field validation fails  */}
        {errors.name && (
          <span className="text-red-500 font-serif p-1">
            This field is required
          </span>
        )}
      </form>
    </div>
  );
}

export const SendButton = styled("button", {
  // reset button styles
  background: "transparent",
  border: "none",
  padding: 0,
  // margin: 0,
  // styles
  width: "24px",
  margin: "0 10px",
  dflex: "center",
  bg: "$primary",
  borderRadius: "$rounded",
  cursor: "pointer",
  transition: "opacity 0.25s ease 0s, transform 0.25s ease 0s",
  svg: {
    size: "100%",
    padding: "4px",
    transition: "transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms",
    boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
  },
  "&:hover": {
    opacity: 0.8,
  },
  "&:active": {
    transform: "scale(0.9)",
    svg: {
      transform: "translate(24px, -24px)",
      opacity: 0,
    },
  },
});

const SendIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}) => {
  return (
    <svg
      data-name="Iconly/Curved/Lock"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <g transform="translate(2 2)">
        <path
          d="M19.435.582A1.933,1.933,0,0,0,17.5.079L1.408,4.76A1.919,1.919,0,0,0,.024,6.281a2.253,2.253,0,0,0,1,2.1L6.06,11.477a1.3,1.3,0,0,0,1.61-.193l5.763-5.8a.734.734,0,0,1,1.06,0,.763.763,0,0,1,0,1.067l-5.773,5.8a1.324,1.324,0,0,0-.193,1.619L11.6,19.054A1.91,1.91,0,0,0,13.263,20a2.078,2.078,0,0,0,.25-.01A1.95,1.95,0,0,0,15.144,18.6L19.916,2.525a1.964,1.964,0,0,0-.48-1.943"
          fill={fill}
        />
      </g>
    </svg>
  );
};
