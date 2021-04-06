import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, FlatList, View, Text, TouchableOpacity } from 'react-native'
import Header from '../components/header'
import Contact from '../components/contact'

import api from '../services/Api'


export default function contactList() {
  let [infoList, setInfoList] = useState([])

  useEffect(() => {
    async function loadContact() {
      const response = await api.get('/index')
      setInfoList(response.data)
    }
    loadContact()
  }, [])

  const renderItem = ({ item }) => <Contact item={item} />;

  return (
    <>
      <StatusBar />
      <Header />
      <View style={styles.contactList}>
        <FlatList
          data={infoList}
          keyExtractor={contact => infoList._id}
          renderItem={renderItem}
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
