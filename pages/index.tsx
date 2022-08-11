import type { NextPage } from "next";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Card from "../components/Card";
import SingleCard from "../components/SingleCard";
import Auth from "../components/Auth";

const Home: NextPage = () => {
  const [id, setId] = useState("");
  const [colName, setColName] = useState("");

  const getSingleTodo = (id: string, collectionName: string) => {
    setId(id);
    setColName(collectionName);
  };

  return (
    <Box
      minH="100vh"
      alignItems="center"
      display={{ base: "flex", md: "grid" }}
      flexDirection="column"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={6}
      m={6}
    >
      <Card
        title="Important, Urgent"
        collectionName="ImpUrg"
        getSingleTodo={getSingleTodo}
      />
      <Card
        title="Important, Not Urgent"
        collectionName="ImpNot"
        getSingleTodo={getSingleTodo}
      />
      <Card
        title="Not Important, Urgent"
        collectionName="NomUrg"
        getSingleTodo={getSingleTodo}
      />
      <Card
        title="Not Important, Not Urgent"
        collectionName="NomNot"
        getSingleTodo={getSingleTodo}
      />
      <SingleCard id={id} colName={colName} />
    </Box>
  );
};

export default Home;
