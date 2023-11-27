import React from 'react';
import { Flex, Text, Checkbox, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList = ({ tasks, onTaskCompleted, onDeleteTask }) => {
    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <>
        <Flex flexDirection="column" mt={1} borderLeft="1px solid red" paddingLeft="10px">
      <Text mt="25px" fontWeight="bold" color="black" borderBottom="1px solid lightgray">
        Mis Tareas:
      </Text>
      <Flex flexDirection="column" mt={0}>
        {pendingTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskCompleted={onTaskCompleted}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </Flex>
      <Text mt="25px" fontWeight="bold" color="black" borderBottom="1px solid lightgray">
        Mis tareas completadas:
      </Text>
      <Flex flexDirection="column" mt={1}>
                {completedTasks.map((task) => (
                    <Flex
                        key={task.id}
                        alignItems="center"
                        color="black"
                        justifyContent="space-between"
                        mt={2}
                        borderBottom="1px solid lightgray" //linea gris entre las tareas completas
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
      </Flex>
    </>
    );
};