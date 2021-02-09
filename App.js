import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import codePush from "react-native-code-push";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './src/Screens/HomePage';
import Entry from './src/Screens/Entry';
import AddPost from './src/Screens/AddPost';
import Storys from './src/Screens/Storys'
import SignIn from './src/Screens/SingIn'
import LogIn from './src/Screens/LogIn'
const Stack = createStackNavigator();
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

// appcenter codepush release-react -a bhdrtrs/birHikaye -d Staging;                                               

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Ana Sayfa">
          <Stack.Screen options={{headerShown: false}} name="Ana Sayfa" component={Entry} />
          <Stack.Screen options={{headerShown: false}} name="Giriş Yap" component={LogIn} />
          <Stack.Screen options={{headerShown: false}} name="Bugünün Hikayesi" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="Begenilen Hikayeler" component={Storys} />
          <Stack.Screen options={{headerShown: false}} name="Kayıt Ol" component={SignIn} />
          </Stack.Navigator>
      </NavigationContainer>
    );

  
}

export default codePush(App);
