//display:
// name of app
// name of developer
// current date

import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About() {
  return (
    <>
      <MainLayout>
        <View>
          <Text>ToDoList App</Text>
          <Text>Created by: Matt Yackel</Text>
          <Text>Version: 1.0 (Lab 5)</Text>
          <Text>Date: 11/15/2023</Text>
        </View>
      </MainLayout>
    </>
  );
}
export default About;
