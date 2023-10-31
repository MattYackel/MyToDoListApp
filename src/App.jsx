/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Study',
  ]);

  const handleAdd = newTask => {
    // If task not in list, add it
    if (!tasks.includes(newTask)) {
      setTasks([...tasks, newTask]);
    } else {
      alert(`Task "${newTask}" already exists.`);
    }
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAdd={handleAdd} />
    </SafeAreaView>
  );
}

export default App;
