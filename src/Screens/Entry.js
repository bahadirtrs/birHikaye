import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, SafeAreaView, StatusBar } from 'react-native';
import Logo from '../Components/Entry/Logo';
import Welcome from '../Components/Entry/Welcome';
import Date from '../Components/Entry/Date'
import InfoModal from '../Components/Entry/InfoModal';
import Menu from '../Components/Entry/Menu';
import Info from '../Components/Entry/Info';
import AsyncStorage from '@react-native-community/async-storage';

function Entry({route, navigation}) {
  const [username, setUsername]=useState()
  const [tetik, setTetik]=useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2]=useState(false);

  const  removeItem = async () => { 
    try {
      await AsyncStorage.removeItem("username");
      navigation.replace('Ana Sayfa')
    }catch (exception) {
      return false;
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('username').then((deger)=>{
      if(deger!=null){
        setUsername(deger)
        setTetik(false)
      }else{
        setUsername(deger)
        setTetik(false)
      }
        console.log(deger)
    }).done();
  }, [tetik]);

  const LoginPress=() =>{
    setModalVisible2(!modalVisible2)
    navigation.navigate('Giriş Yap')
  }


  return (
    <View style={{flex:1, backgroundColor:'#118ab2' }} >
      <SafeAreaView style={{backgroundColor:'#118ab2'}} />
       <StatusBar backgroundColor={'#118ab2'}  barStyle="light-content" />
        <Menu  
          quickButton={()=>removeItem()} 
          username={username} 
          butonPress={() => navigation.push('Begenilen Hikayeler',{username:username})} 
          loginPress={()=>LoginPress()}  
          modalPress={()=>setModalVisible2(!modalVisible2)}
          direktLogin={()=>navigation.navigate('Giriş Yap')}
          modalVisible2={modalVisible2}
          
        />
        <View style={styles.container}>
          <Logo/>
          <Welcome 
            butonPress={() => navigation.push('Bugünün Hikayesi',{username:username})} 
          />
          <Date/>
       </View>
       <View style={styles.bigButtonContainer}>
          <InfoModal 
            modalPress={() => {setModalVisible(!modalVisible)}} 
            butonPress={modalVisible} 
          />
          <Info 
            butonPress={() => {setModalVisible(!modalVisible)}} 
          />
       </View>
    </View>
  );
}
const styles = StyleSheet.create({ 
  container:{
    flex: 12, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor:'#118ab2',
  },

  bigButtonContainer:{
    flex:1,
    backgroundColor:'#118ab2',
    alignItems:'flex-end',
    padding:30
  },
});

  export default Entry;