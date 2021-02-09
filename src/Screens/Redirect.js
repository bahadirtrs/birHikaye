import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, SafeAreaView } from 'react-native';


function Redirect({route, navigation}) {

  useEffect(() => {
    navigation.navigate('Ana Sayfa')
  }, [])
 


  return (
    <View style={{flex:1, backgroundColor:'#118ab2' }} >
     <Text>Uygulamaya giriş yapılıyor</Text>
    </View>
  );
}


  export default Redirect;