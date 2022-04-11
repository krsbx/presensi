import { LocationObject } from 'expo-location';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

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

export type ITabMainApps = {
  List: {
    screen?: keyof ITabMainApps;
  };
  Add: {
    screen?: keyof ITabMainApps;
  };
};

export type IListStack = {
  Lists: {
    screen?: keyof IListStack;
  };
  Detail: {
    id: string;
    screen?: keyof IListStack;
  };
};

export type IStackScreenProps<T extends keyof IStackScreen> = StackScreenProps<IStackScreen, T>;

export type ITabMainProps<T extends keyof ITabMainApps> = BottomTabScreenProps<ITabMainApps, T>;

export type IStackListProps<T extends keyof IListStack> = BottomTabScreenProps<IListStack, T>;

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

export interface IAction<T> {
  type: string;
  data: Partial<T>;
}

export interface ResourceWithId<T> {
  [uid: string]: T;
}
