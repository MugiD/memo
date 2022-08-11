import {
  Text,
  Heading,
  Input,
  Button,
  Box,
  Flex,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { app, database } from "../utils/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Card = ({
  collectionName,
  title,
  getSingleTodo,
}: {
  collectionName: string;
  title: string;
  getSingleTodo: any;
}) => {
  const dbInstance = collection(database, collectionName);
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = () => {
    addDoc(dbInstance, {
      todo,
    }).then(() => {
      setTodo("");
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

  const isEmpty = todo === "";

  const bgTodo = useColorModeValue("#E9E5E0", "#193746");

  return (
    <Box
      bg={useColorModeValue("#f5f1ed", "#16262e")}
      rounded="xl"
      height="400px"
      maxH="max-content"
      position="relative"
    >
      <Heading fontSize="2xl" textAlign="center" p={6}>
        {title}
      </Heading>
      <Box
        p={6}
        overflowY="scroll"
        height="300px"
        __css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {tasks.map((tasks) => {
          return (
            <Box
              key={tasks.id}
              bg={bgTodo}
              rounded="xl"
              mb={2}
              p={6}
              onClick={() => getSingleTodo(tasks.id, collectionName)}
              cursor="pointer"
            >
              <Text>{tasks.todo}</Text>
            </Box>
          );
        })}
      </Box>
      <FormControl position="absolute" bottom="0" width="100%">
        <Flex>
          <Input
            borderRadius="none"
            borderBottomLeftRadius="md"
            placeholder="Enter Todo"
            bg={bgTodo}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            variant="unstyled"
            px={6}
          />
          <Button
            borderRadius="none"
            borderBottomRightRadius="md"
            onClick={addTask}
            bg="colors.yellow"
            disabled={isEmpty}
            _disabled={{
              bg: "colors.yellow",
            }}
          >
            Add
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default Card;
