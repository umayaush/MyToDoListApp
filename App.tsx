/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState(
    ['Do laundry', 'Go to gym', 'Walk dog']
  );

  const addTask = (taskText) => {
    // Check for empty input
    if (taskText.trim() == '') {
      return;
    }

    // Check for duplicates (case-insensitive)
    const lowerCaseTasks = tasks.map(task => task.toLowerCase());
    if (lowerCaseTasks.includes(taskText.toLowerCase())) {
      return;
    }

    // Add new task
    setTasks([...tasks, taskText])
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
}
export default App;
