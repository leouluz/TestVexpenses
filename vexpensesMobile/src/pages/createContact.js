import React, { useState, useEffect } from 'react'
import {
  Text, View, ScrollView,
  StyleSheet, TextInput,
  Dimensions, TouchableOpacity, Image
} from 'react-native'
import Logo from '../img/logoC.png'
import api from '../services/api'

const { width } = Dimensions.get('window')


export default function createContact() {

  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [name, setName] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  async function getUser() {
    try {
      const response = await api.get(`/14165416/json`);
      setAddress(response.data.logradouro)
      setDistrict(response.data.bairro)
      setCity(response.data.localidade)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
        <Image source={Logo} style={{ height: 80, width: 80 }} />
        <Text style={styles.textTittle}> Criando Contato </Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.inputBox}>
          <TextInput
            name="name"
            placeholder="Nome do contato"
            placeholderTextColor="#999"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            name="numberPhone"
            placeholder="Telefone do contato"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="decimal-pad"
            value={numberPhone}
            onChangeText={setNumberPhone}
          />
          <TextInput
            name="email"
            placeholder="Email do contato"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            name="cep"
            placeholder="CEP - Opcional"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="decimal-pad"
            value={cep}
            onChangeText={setCep}
          />
          <TextInput
            name="address"
            placeholder="Rua/Av.São Almeida"
            placeholderTextColor="#999"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
          <View style={styles.inputAddress}>
            <TextInput
              name="number"
              placeholder="nº47"
              placeholderTextColor="#999"
              style={styles.input}
              keyboardType="decimal-pad"
              value={number}
              onChangeText={setNumber}
            />
            <TextInput
              name="district"
              placeholder="Bairro"
              placeholderTextColor="#999"
              style={styles.input}
              value={district}
              onChangeText={setDistrict}
            />
          </View>
          <TextInput
            name="city"
            placeholder="Cidade: São Paulo"
            placeholderTextColor="#999"
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={getUser}
          >
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