import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import api from './service/api';
import Form from './src/pages/Form';

export default function App() {

  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

