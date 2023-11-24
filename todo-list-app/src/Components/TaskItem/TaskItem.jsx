import React from 'react';
import { Checkbox, Text, Button, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const TaskItem = ({ task, onTaskCompleted, onDeleteTask }) => {
  const completeTask = () => {
    onTaskCompleted(task.id, !task.completed);
  };

  const deleteTask = () => {
    onDeleteTask(task.id);
  };

//  onTaskCompleted: para marca o desmarca una tarea como completada.
// onDeleteTask: cuando se elimina una tarea.

  return (    
      <div>
        <p>TaskItem</p>
        <p>Checkbox</p>
      </div>
  );
};
