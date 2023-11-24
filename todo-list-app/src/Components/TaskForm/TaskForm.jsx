import React, { useState } from "react";
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

  const inputUser = (e) => {
    setTaskName(e.target.value);
  };

  const enSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName("");
  };

  console.log(taskName); //Para que vean en consola que funciona el agregar una tarea

  return (
    <Flex as="form" onSubmit={enSubmit} alignItems="center">
      <InputGroup flex="7" m={0}>
        <Input
          type="text"
          color='white'
          placeholder="Todo List"
          value={taskName}
          onChange={inputUser}
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
