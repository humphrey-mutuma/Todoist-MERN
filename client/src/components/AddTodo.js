import React from "react";
import { Input, Button } from "@nextui-org/react";
export default function AddTodo() {
  return (
    <section className="mt-5 py-3 flex items-center justify-start space-x-1 ">
      <Input labelPlaceholder="Add Todo" status="primary" />
      <Button color="primary" auto>
        Add
      </Button>
    </section>
  );
}
