import React from 'react'
import {
  Text, View, ScrollView,
  StyleSheet, TextInput,
  Dimensions, TouchableOpacity, Image
} from 'react-native'
import Logo from '../img/logoC.png'
import api from '../services/api'

const { width } = Dimensions.get('window')

export default function createContact() {

  api.get("/users/leouluz").then((response) => {
    console.log(response)
  })

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
        <Image source={Logo} style={{ height: 80, width: 80 }} />
        <Text style={styles.textTittle}> Criando Contato </Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nome do contato"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <TextInput
            placeholder="Telefone do contato"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="decimal-pad"

          />
          <TextInput
            placeholder="Email do contato"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="CEP - Opcional"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="decimal-pad"
          />
          <TextInput
            placeholder="Rua/Av.São Almeida"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <View style={styles.inputAddress}>
            <TextInput
              placeholder="nº47"
              placeholderTextColor="#999"
              style={styles.input}
              keyboardType="decimal-pad"
            />
            <TextInput
              placeholder="Bairro"
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.textSave}>SALVAR</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  textTittle: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
  inputBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    width: width,
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputAddress: {
    flexDirection: 'row'
  },
  scroll: {
    flex: 1
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
  textSave: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  }
})