import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/login'
import Contact from './pages/contactList'
import CreateContact from './pages/createContact'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function Tabs() {
  return (
    <Tab.Navigator
      headerMode={false}
      tabBarOptions={{
        labelStyle: { fontSize: 20 },
        style: { justifyContent: 'center' }
      }}
    >
      <Tab.Screen name="Contatos" component={Contact} />
      <Tab.Screen name="Criar" component={CreateContact} />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}