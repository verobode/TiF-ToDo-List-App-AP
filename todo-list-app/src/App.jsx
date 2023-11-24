import React, { useState, useEffect } from 'react';
import { Box, Spacer, Center, Flex } from '@chakra-ui/react';
import { TaskForm } from './Components/TaskForm/TaskForm';
import Header from './Components/Header/Header';

export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // const TaskCompleted = (taskId, isCompleted) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === taskId ? { ...task, completed: isCompleted } : task
  //   );
  //   setTasks(updatedTasks);
  // };

  // const DeleteTask = (taskId) => {
  //   const updatedTasks = tasks.filter((task) => task.id !== taskId);
  //   setTasks(updatedTasks);
  // };

  const addTask = (taskName) => {
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setActionPerformed(true);
  };

  return (
    <>
    <Header />
    <Center height="60vh">
      <Box  p={4} mt={4} bg="white" color="white">
        <Flex minWidth='max-content' alignItems='center' gap='2'>
        </Flex>
        <Spacer />
        <TaskForm onAddTask={addTask} />
        {/* <TaskList
          tasks={tasks}
          onTaskCompleted={TaskCompleted}
          onDeleteTask={DeleteTask}
        /> */}
      </Box>
    </Center>
    </>
  );
};
