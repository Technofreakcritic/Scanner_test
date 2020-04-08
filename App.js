import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAWu5GwlZR2ulIw4WtpcizSB-QhmL4P4Iw",
  authDomain: "horizon-f55f8.firebaseapp.com",
  databaseURL: "https://horizon-f55f8.firebaseio.com",
  projectId: "horizon-f55f8",
  storageBucket: "horizon-f55f8.appspot.com",
  messagingSenderId: "164246475661",
  appId: "1:164246475661:web:8ded631af930bbed5723c4",
  measurementId: "G-M3KX22H3M5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register : RegisterScreen
})


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth : AuthStack
    },
    {
      initial:"Loading"

    }
  )
)






