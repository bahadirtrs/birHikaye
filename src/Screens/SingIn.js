import React, {useState, useEffect} from 'react';
import { ScrollView, View, KeyboardAvoidingView, Alert, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import {login_screen} from '../styles/page_styles';
import {FormComponent} from '../Components/FormComponent';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

  function SignIn({ navigation }) {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [UserPasswordTwo, setUserPasswordTwo] = useState('');
  const [userNameControl, setUserNameControl]= useState();
  const [uyari, setUyari]= useState('')

useEffect(() => {
  firestore()
  .collection('User')
  .doc(UserEmail)
  .get()
  .then(documentSnapshot => {
    if (documentSnapshot.exists) {
      setUserNameControl(false)
      setUyari('Bu kullanıcı adı başkası tarafından kullanılıyor')
    }else{
      setUserNameControl(true)
      setUyari('')
    }
  });
}, [UserEmail])

useEffect(() => {
  setUyari('')
 }, [UserEmail, UserPassword])
 
 const __doSignUp = async () => {
  if(userNameControl==true){
    if(UserPassword.length>4) {
      if(UserEmail.length>4) { 
        if(UserPassword==UserPasswordTwo){
          firestore()
          .collection('User').doc(UserEmail)
          .set({
            username:UserEmail,
            password:UserPassword,
            date:firestore.FieldValue.serverTimestamp(),     
          })
          AsyncStorage.getItem('username').then(deger =>{
            if(deger==null){
              AsyncStorage.setItem('username', UserEmail);
            } else {
              AsyncStorage.setItem('username', UserEmail);
            }
          });
            navigation.replace('Ana Sayfa')
          }else{
            setUyari('Parolalar uyuşmuyor lütfen kontrol edin.')
          }
        }else{
          setUyari('En az 5 karakterli bir Kullanıcı Adı giriniz')
        }
    }else{
      setUyari('En az 5 karakterli bir anahtar giriniz.')
    }
  }else{
    setUyari('Lütfen başka bir kullanıcı adı belirleyin')
  }
}
  return (
    <View style={{flex:1, height:Dimensions.get('screen').height, backgroundColor:'#118ab2'}} >
    <ScrollView>
      <KeyboardAvoidingView
        style={login_screen.keyboard_view}
        keyboardVerticalOffset={10}
        behavior={'position'}>
        <View style={login_screen.container}>
          <View style={login_screen.box}>
            <FormComponent
              control={userNameControl}
              setEmail={(email) => setUserEmail(email)}
              setPassword={(password) => setUserPassword(password)}
              setPasswordTwo={(passwordTwo) => setUserPasswordTwo(passwordTwo)}
              onButtonText="Kayıt Ol"
              butonPress={() => __doSignUp()}
              email={UserEmail}
              uyari={uyari}
              password={UserPassword}
              passwordTwo={UserPasswordTwo}
              pagePress={()=>navigation.replace('Giriş Yap')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </View>
  );
}
export default SignIn;