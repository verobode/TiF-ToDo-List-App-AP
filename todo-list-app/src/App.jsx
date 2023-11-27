import React, { useState, useEffect } from 'react';
import { Box, Spacer, Center, Flex } from '@chakra-ui/react';
import { TaskList } from './Components/TaskList/TaskList';
import { TaskForm } from './Components/TaskForm/TaskForm';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const completedTask = (taskId, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: isCompleted } : task
    );
    setTasks(updatedTasks);
    
    
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = (taskName) => {
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <Box mt={8}> 
      <Center>
        <Box p={4} mt={4} bg="white" color="white" maxW="500px" w="100%" borderRadius='10px'>
          <Flex flexDirection="column" alignItems="stretch">
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
              tasks={tasks}
              onTaskCompleted={completedTask}
              onDeleteTask={deleteTask}
            />
          </Flex>
        </Box>
      </Center>
      </Box>
      <Footer />
    </>
  );
};
