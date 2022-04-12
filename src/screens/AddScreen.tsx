import React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { postPresensi } from '../utils/actions';
import { ITabMainProps } from '../utils/interfaces';

const AddScreen: React.FC<ITabMainProps<'Add'>> = ({}) => {
  const submitPresensi = async () => {
    await postPresensi({
      location: (await Location.getCurrentPositionAsync()).coords,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Button title={'Rekam Kehadiran!'} onPress={submitPresensi} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default AddScreen;
