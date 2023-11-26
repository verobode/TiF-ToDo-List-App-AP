import React from 'react';
import { Flex, Text, Checkbox, Button, IconButton} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList = ({ tasks, onTaskCompleted, onDeleteTask }) => {
    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <>
      <Text mt="20px" fontWeight="bold" color="black">
        My Tasks:
      </Text>
      <Flex flexDirection="column" mt={4}>
        {pendingTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskCompleted={onTaskCompleted}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </Flex>
      <Text mt="20px" fontWeight="bold" color="black">
        Completed Tasks:
      </Text>
      <Flex flexDirection="column" mt={4}>
                {completedTasks.map((task) => (
                    <Flex
                        key={task.id}
                        alignItems="center"
                        color="black"
                        justifyContent="space-between"
                        mt={2}
                        borderBottom="1px solid lightgray" // La linea entre las tareas completas
                        pb={2}
                    >
                        <Flex alignItems="center">
                            <Checkbox
                                size="lg"
                                mr={2}
                                isChecked={task.completed}
                                onChange={() => onTaskCompleted(task.id, !task.completed)}
                                borderColor="gray"
                            />
                            <Text textDecoration="line-through">{task.name}</Text>
                        </Flex>
                        <Button
                            colorScheme="red"
                            borderRadius="none"
                            size="sm"
                            onClick={() => onDeleteTask(task.id)}
                            leftIcon={<DeleteIcon />}
                        ></Button>
          </Flex>
        ))}
      </Flex>
    </>
    );
};