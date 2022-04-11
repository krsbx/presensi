import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';

const ListScreen = () => {
  return <KeyboardAvoidingView style={styles.container}></KeyboardAvoidingView>;
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

export default ListScreen;
