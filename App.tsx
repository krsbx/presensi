import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/naviigations/AuthStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
