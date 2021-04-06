import React from 'react'
import { StyleSheet, StatusBar, FlatList, View } from 'react-native'
import Header from '../components/header'
import Contact from '../components/contact'

const DATA = [
  {
    id: '1',
    letter: 'L',
    name: 'Leonardo',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '2',
    letter: 'L',
    name: 'Luis',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '3',
    letter: 'L',
    name: 'Lucas',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '4',
    letter: 'P',
    name: 'Paola',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '5',
    letter: 'S',
    name: 'Sergio',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '6',
    letter: 'F',
    name: 'Fernando',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '7',
    letter: 'G',
    name: 'Gustavo',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '8',
    letter: 'C',
    name: 'Catia',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '9',
    letter: 'P',
    name: 'Pedro',
    phoneNumber: '(16) 9 9999-9999',
  },
  {
    id: '10',
    letter: 'A',
    name: 'Alessandro',
    phoneNumber: '(16) 9 9999-9999',
  },

];

export default function contactList() {
  const renderItem = ({ item }) => <Contact item={item} />;

  return (
    <>
      <StatusBar />
      <Header />
      <View style={styles.contactList}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  contactList: {
    flex: 1,
  }
})
