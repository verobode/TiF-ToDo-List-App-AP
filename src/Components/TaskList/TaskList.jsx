import React from 'react';
import { Flex, Text} from '@chakra-ui/react'
import { TaskItem } from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onTaskCompleted, onDeleteTask }) => {
    return (
        <>
            <div>
                <p>TaskList</p>
                {/* el TaskList toma las tareas y las muestra en forma de lista, utilizando el componente TaskItem para representar cada una de ellas. */}
                <p>Usar map para iterar sobre el array "tasks" y renderizar el componente TaskItem</p>
            </div>
        </>
    );
};

export {TaskList}