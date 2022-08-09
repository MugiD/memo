import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={6} m={6}>
      <Card title="Important, Urgent" collectionName="ImpUrg" />
      <Card title="Important, Not Urgent" collectionName="ImpNot" />
      <Card title="Not Important, Urgent" collectionName="NomUrg" />
      <Card title="Not Important, Not Urgent" collectionName="NomNot" />
    </Box>
  );
};

export default Home;
