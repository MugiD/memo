import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Card from "../components/Card";
import SingleCard from "../components/SingleCard";
import { useState } from "react";
import Auth from "../components/Auth";

const Home: NextPage = () => {
  // get certain task
  const [ID, setID] = useState("");
  const [colName, setColName] = useState("");
  const getSingleTodo = (id: any, collectionName: string) => {
    setID(id);
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
      <SingleCard ID={ID} colName={colName} />
    </Box>
  );
};

export default Home;
