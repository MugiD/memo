import { Box, Heading, Button, Input } from "@chakra-ui/react";
import { app, database } from "../utils/firebaseConfig";
import { doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const SingleCard = ({ ID, colName }: { ID: string; colName: string }) => {
  const [singleTask, setSingleTask] = useState<Todo>({});
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState<any>("");

  const getEditData = () => {
    setIsEdit(true);
    setTodo(singleTask.todo);
  };

  const getSingleTask = async () => {
    if (ID) {
      const singleTask = doc(database, colName, ID);
      const data = await getDoc(singleTask);
      setSingleTask({ ...data.data(), id: data.id });
    }
  };

  useEffect(() => {
    getSingleTask();
    // eslint-disable-next-line
  }, [ID]);

  const editTask = (id: any) => {
    const collectionById = doc(database, colName, id);

    updateDoc(collectionById, {
      todo,
    }).then(() => {
      window.location.reload();
    });
  };

  const deleteTask = (id: any) => {
    const collectionById = doc(database, colName, id);

    deleteDoc(collectionById).then(() => {
      window.location.reload();
    });
  };

  if (ID)
    return (
      <Box
        position="absolute"
        bg="colors.darkyellow"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {isEdit ? (
          <Box>
            <Input
              placeholder="Enter the Task"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            <Button onClick={() => editTask(singleTask.id)}>Update Task</Button>
          </Box>
        ) : (
          <Box>
            <Heading>{singleTask.todo}</Heading>
            <Button onClick={getEditData}>Edit</Button>
            <Button onClick={() => deleteTask(singleTask.id)}>Delete</Button>
          </Box>
        )}
      </Box>
    );
};

export default SingleCard;
