import { LocationObject } from 'expo-location';
import { StackScreenProps } from '@react-navigation/stack';

export type IStackScreen = {
  Login: {
    screen?: keyof IStackScreen;
  };
  Register: {
    screen?: keyof IStackScreen;
  };
  MainApp: {
    screen?: keyof IStackScreen;
  };
};

export type IStackMainApp = {
  List: {
    screen?: keyof IStackMainApp;
  };
  Detail: {
    id: string;
    screen?: keyof IStackMainApp;
  };
  Add: {
    screen?: keyof IStackMainApp;
  };
};

export type IStackScreenProps<T extends keyof IStackScreen> = StackScreenProps<IStackScreen, T>;

export type IStackMainProps<T extends keyof IStackMainApp> = StackScreenProps<IStackMainApp, T>;

export interface IPresensi {
  date: string; // To store the date
  userId: string; // To store who is the user
  // Store the location coord
  location: LocationObject['coords'];
  // Will filled by the server
  timestamp: string;
}

export interface IUser {}

export interface IAuth {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
}
