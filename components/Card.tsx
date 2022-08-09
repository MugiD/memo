import { Text, Heading, Input, Button, Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { app, database } from "../utils/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Card = ({
  collectionName,
  title,
}: {
  collectionName: string;
  title: string;
}) => {
  const dbInstance = collection(database, collectionName);
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = () => {
    addDoc(dbInstance, {
      todo,
    }).then(() => {
      setTodo("Done");
      getTasks();
    });
  };

  const getTasks = () => {
    getDocs(dbInstance).then((data: any) => {
      setTasks(
        data.docs.map((item: any) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <Box bg="colors.darkblue" p={4} rounded="xl">
      <Heading>{title}</Heading>
      <Box p={6}>
        {tasks.map((tasks) => {
          return (
            <Box key={tasks.id}>
              <Text>{tasks.todo}</Text>
            </Box>
          );
        })}
      </Box>
      <Flex>
        <Input
          borderRightRadius="none"
          placeholder="Enter Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button borderLeftRadius="none" onClick={addTask}>
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
