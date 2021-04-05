import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import Logo from '../img/logoC.png'

export default function login({ navigation }) {
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
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
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
