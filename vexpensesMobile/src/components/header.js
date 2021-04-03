import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Logo from '../img/logoC.png';
import PlusButton from '../img/plusbutton.png';

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
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.viewInput}>
          <Image style={styles.plusButton} source={PlusButton} />
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'row',
    width,
    height: 50,
    padding: 5
  },
  logo: {
    padding: 5,
    width: 50,
    height: 50
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
    width: width * 0.8,
    height: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 15,
  },
})
