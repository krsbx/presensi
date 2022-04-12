import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddScreen } from '../screens';
import ListStack from './ListStack';
import { ITabMainApps } from '../utils/interfaces';
import { locationPermission } from '../utils/permissions';

const MainContainer: React.FC = () => {
  const Tab = createBottomTabNavigator<ITabMainApps>();

  useEffect(() => {
    locationPermission();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="List" component={ListStack} />
      <Tab.Screen name="Add" component={AddScreen} />
    </Tab.Navigator>
  );
};

export default MainContainer;
