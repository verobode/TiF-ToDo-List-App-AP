import React from 'react';
import { Checkbox, Text, Button, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import './TaskItem.css';

export const TaskItem = ({ task, onTaskCompleted, onDeleteTask }) => {
  const completeTask = () => {
    onTaskCompleted(task.id, !task.completed);
  };

  const deleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <Flex
      alignItems="center"
      color='black'
      justifyContent="space-between"
      mt={2}
      position="relative"
      borderBottom="1px solid lightgray" // Línea horizontal entre tareas
      pb={2} 
      className="task-item-container"
      style={{ cursor: task.completed ? 'not-allowed' : 'pointer' }}
    >
      <Flex alignItems="center" position="relative">
        <Checkbox
          size='lg'
          mr={2}
          isChecked={task.completed}
          onChange={completeTask}
          borderColor='gray'
        />
        <Text textDecoration={task.completed ? 'line-through' : 'none'}>
          {task.name}
        </Text>
      </Flex>
      <Button
        colorScheme="red"
        borderRadius='none'
        size='sm'
        onClick={deleteTask}
        leftIcon={<DeleteIcon />}
      />
    </Flex>
  );
};
