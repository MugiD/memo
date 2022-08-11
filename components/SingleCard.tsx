import {
  Box,
  Heading,
  Button,
  Input,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, CloseIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { app, database } from "../utils/firebaseConfig";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const SingleCard = ({ id, colName }: { id: string; colName: string }) => {
  const [singleTask, setSingleTask] = useState<Todo>({});
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState("");

  const getEditData = () => {
    setIsEdit(true);
    setTodo(singleTask.todo!);
  };

  const getSingleTask = async () => {
    if (id) {
      const singleTask = doc(database, colName, id);
      const data = await getDoc(singleTask);
      setSingleTask({ ...data.data(), id: data.id });
    }
  };

  useEffect(() => {
    getSingleTask();
    // eslint-disable-next-line
  }, [id]);

  const editTask = (id: string) => {
    const collectionById = doc(database, colName, id);

    updateDoc(collectionById, {
      todo,
    }).then(() => {
      window.location.reload();
    });
  };

  const deleteTask = (id: string) => {
    const collectionById = doc(database, colName, id);

    deleteDoc(collectionById).then(() => {
      window.location.reload();
    });
  };

  const modal = useColorModeValue("#f5f1ed", "#16262e");

  if (id)
    return (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg={modal}
        boxShadow="dark-lg"
        w="50%"
        h="25%"
        p={6}
        rounded="xl"
      >
        <IconButton aria-label="close" icon={<CloseIcon />} bg="transparent" />
        {isEdit ? (
          <Box>
            <Input
              placeholder="Enter the Task"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            <IconButton
              aria-label="confirm"
              icon={<CheckIcon />}
              onClick={() => editTask(singleTask.id!)}
            />
          </Box>
        ) : (
          <Box>
            <Heading>{singleTask.todo}</Heading>
            <IconButton
              aria-label="edit"
              icon={<EditIcon />}
              onClick={getEditData}
            />
            <IconButton
              aria-label="delete"
              icon={<DeleteIcon />}
              onClick={() => deleteTask(singleTask.id!)}
            />
          </Box>
        )}
      </Box>
    );
  else return <></>;
};

export default SingleCard;
