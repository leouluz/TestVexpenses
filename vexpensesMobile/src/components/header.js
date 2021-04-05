import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Image, TextInput } from 'react-native'
import Logo from '../img/logoC.png';

const { width } = Dimensions.get('window')

export default class header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={Logo} />
        <View style={styles.viewInput}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search / Name: Luis / Cep: 14165-416"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    paddingBottom: 15,
    paddingTop: 15,
    justifyContent: 'space-around',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 8,
    shadowOpacity: 0.1,
  },
  logo: {
    padding: 5,
    width: 45,
    height: 45
  },
  plusButton: {
    width: 35,
    height: 35
  },
  viewInput: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    width: width * 0.7,
    height: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 15,
  },
})
