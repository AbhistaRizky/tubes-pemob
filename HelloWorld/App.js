/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timeline from './pages/Timeline';
import AddPost from './pages/AddPost';
import PostEdit from './pages/PostEdit';



const Stack = createNativeStackNavigator()
const HelloWorldApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Timeline" component={Timeline} options={{ title: 'Timeline' }} />
        <Stack.Screen name="AddPost" component={AddPost} options={{ title: 'Add Post' }} />
        <Stack.Screen name="PostEdit" component={PostEdit} options={{ title: 'Edit Post' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HelloWorldApp;