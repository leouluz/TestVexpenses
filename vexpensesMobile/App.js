import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login'
import ContactList from './src/pages/contactList'

export default function App() {
  return (
    <View style={styles.container}>
      <ContactList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
