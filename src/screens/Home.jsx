//render the todo list and form

import React from 'react';
import {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

function Home({navigation}) {
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
    <>
      <MainLayout>
        <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm onAdd={handleAdd} />

          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </SafeAreaView>
      </MainLayout>
    </>
  );
}
export default Home;
