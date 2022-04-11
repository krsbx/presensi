import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens';
import ListStack from './ListStack';
import { ITabMainApps } from '../utils/interfaces';

const MainAppStack: React.FC = () => {
  const Tab = createBottomTabNavigator<ITabMainApps>();

  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Add" component={LoginScreen} />
      <Tab.Screen name="List" component={ListStack} />
    </Tab.Navigator>
  );
};

export default MainAppStack;
