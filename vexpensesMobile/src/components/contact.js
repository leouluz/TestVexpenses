import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function (props) {
  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <View style={styles.imgLetter}>
          <Text style={styles.fontImg}>{props.item.letter}</Text>
        </View>
        <Text style={styles.nameText}>{props.item.name}</Text>
        <Text style={styles.numberText} >{props.item.phoneNumber}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 75,
    marginBottom: 8,
    backgroundColor: '#fff',
    elevation: 8,
    shadowOpacity: 0.1,
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  fontImg: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  imgLetter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 50
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  numberText: {
    fontSize: 18,
  }
})