import { Text, Heading, Input, Button, Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { app, database } from "../utils/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Add = () => {
  const [todo, setTodo] = useState<string>("");
  const dbInstance = collection(database, "tasks");
  const [taskArray, setTaskArray] = useState<Array<any>>([]);

  const AddTask = () => {
    addDoc(dbInstance, {
      todo: todo,
    }).then(() => {
      setTodo("");
      getTasks()
    });
  };

  const getTasks = () => {
    getDocs(dbInstance).then((data: any) => {
      setTaskArray(
        data.docs.map((item: any) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Box>
      <Heading>Memo</Heading>
      <Flex>
        <Input
          borderRightRadius="none"
          placeholder="Enter Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button borderLeftRadius="none" onClick={AddTask}>
          Add
        </Button>
      </Flex>
      {taskArray.map((tasks) => {
        return (
          <Box key={tasks.id}>
            <Text>{tasks.todo}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default Add;
