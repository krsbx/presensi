import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen, DetailScreen } from '../screens';
import { IListStack } from '../utils/interfaces';

const ListStack: React.FC = () => {
  const Stack = createNativeStackNavigator<IListStack>();

  return (
    <Stack.Navigator
      initialRouteName="Lists"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Lists" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default ListStack;
