import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/Api'

import Logo from '../img/logoC.png'

export default function login({ navigation }) {

  const [userName, setUserName] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Home')
      }
    })
  }, [])

  async function handlerSubmit() {

    const response = await api.post('/sessions', {
      userName
    })
    const { _id } = response.data

    await AsyncStorage.setItem('user', _id)

    navigation.navigate('Home')
  }


  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text>
        Digite o nome de Usuario
      </Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Ex: Matheus_01"
        placeholderTextColor="#999"
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handlerSubmit}
      >
        <Text style={styles.textButton}>Acessar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1bbfdb',
    height: 45,
    width: '100%',
    marginTop: 10,
    borderRadius: 8,
    elevation: 10
  },
  textButton: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  }

})
