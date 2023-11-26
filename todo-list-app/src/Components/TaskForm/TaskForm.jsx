import React, { useState, useEffect } from "react";
import {
  Flex,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const userInput = (e) => {
    setTaskName(e.target.value);
  };

  const useSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      onAddTask(taskName);
      setTaskName("");
      //Condición para limpiar el input
    }
  };

  useEffect(() => {
    setTaskName(""); // Se limpia el input al agregar una tarea
  }, [onAddTask]);
  

  return (
    <Flex as="form" onSubmit={useSubmit} alignItems="center">
      <InputGroup flex="12" mt={0}>
        <Input
          type="text"
          placeholder="Todo List"
          value={taskName}
          onChange={userInput}
          bgColor="gray.900"
          border='none'
          _placeholder={{ color: 'white' }}
        />
        <InputRightElement>
          <IconButton
            type="submit"
            isRound={false}
            variant="solid"
            colorScheme="gray"
            aria-label="Agregar"
            size="sm"
            fontSize="20px"
            icon={<AddIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
