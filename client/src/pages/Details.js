import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Grid, Text} from "@nextui-org/react";

export default function Details() {
  const [todoDetails, setTodoDetails] = useState("");

  // read todo id from react-router params
  let { todoId } = useParams();

  // fetch a particular todo from the database
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${todoId}`)
      .then((res) => {
        setTodoDetails(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [todoId]);

  return (
    <section className="container bg-gray-50 w-full m-auto h-screen flex items-start ">
     <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Todo Details</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>{todoDetails}  </Text>
          </Card.Body>          
        </Card>
      </Grid>
    </Grid.Container>
    </section>
  );
}

