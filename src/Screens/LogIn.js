import React, {useState, useEffect} from 'react';
import { ScrollView, View, KeyboardAvoidingView, Alert, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import {login_screen} from '../styles/page_styles';
import {FormComponentLogIn} from '../Components/FormComponentLogIn';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

function LogIn({ navigation }) {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [UserPasswordTwo, setUserPasswordTwo] = useState('');
  const [uyari, setUyari]= useState('');
  const [data, setData]= useState(null)

const __doSignUp = async () => {
  if(UserEmail.length<5 || UserPassword<5){
    setUyari("Kullanıcı adı veya anahtar yanlış")
  }else{
  firestore()
  .collection('User')
  .doc(UserEmail)
  .get()
  .then(documentSnapshot => {
    if (documentSnapshot.exists) {
      setData(documentSnapshot.data())
    }else{
      setUyari("Böyle bir kullanıcı bulunamadı.")
    }
  })
}
}
useEffect(() => {
  setUyari('')
 }, [UserEmail, UserPassword])

useEffect(() => {

  if(data!=null){
      if(data.username==UserEmail && data.password==UserPassword){
        AsyncStorage.getItem('username').then(deger =>{
          if(deger==null){
            AsyncStorage.setItem('username', UserEmail);
            navigation.replace('Ana Sayfa')
          }
        });
      }
      else{
        setUyari("Kullanıcı adı veya anahtar yanlış")
        }
    } 
  
}, [data])
 
  return (
    <View style={{flex:1, height:Dimensions.get('screen').height, backgroundColor:'#118ab2'}} >
    <ScrollView>
      <KeyboardAvoidingView
        style={login_screen.keyboard_view}
        keyboardVerticalOffset={10}
        behavior={'position'}>
        <View style={login_screen.container}>
          <View style={login_screen.box}>
            <FormComponentLogIn
              setEmail={(email) => setUserEmail(email)}
              setPassword={(password) => setUserPassword(password)}
              setPasswordTwo={(passwordTwo) => setUserPasswordTwo(passwordTwo)}
              onButtonText="Giriş Yap"
              butonPress={() => __doSignUp()}
              email={UserEmail}
              uyari={uyari}
              password={UserPassword}
              passwordTwo={UserPasswordTwo}
              pagePress={()=>navigation.replace('Kayıt Ol')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </View>
  );
}
export default LogIn;