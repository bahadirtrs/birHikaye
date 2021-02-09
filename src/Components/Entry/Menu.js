import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Alert, Image, Text, Dimensions } from 'react-native';
import AboutModal from './AboutModal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Menu(props) {
  const [info, setInfo]=useState("Bu sayfada begenilen hikayeler gösterilmektedir. Hikayeleri beğenebilmek için lütfen giriş yapınız.")
  
  return (
    <View style={styles.bigButtonContainerLeft}>
      {
       props.username ?
      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} onPress={props.butonPress}>
          <Icon name="bookmarks-outline" size={25} color="#fff" />
      </TouchableOpacity>
      :
      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} onPress={props.modalPress}>
          <Icon name="bookmarks-outline" size={25} color="#fff" />
          <AboutModal info={info} loginPress={props.loginPress} username={props.username} modalPress={props.modalPress} butonPress={props.modalVisible2} />
      </TouchableOpacity>
      }{
        props.username 
      ? 
      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} onPress={props.modalPress} >
        <AboutModal text={null} quickButton={props.quickButton} username={props.username} modalPress={props.modalPress} butonPress={props.modalVisible2} />
        <Text style={{fontFamily:'GoogleSans-Regular', color:'#fff'}} >{props.username} </Text>
        <Icon name="person-circle-outline" size={32} color="#fff" />
      </TouchableOpacity>
      :
      <TouchableOpacity  style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} onPress={props.direktLogin} >
          <Icon name="person-circle-outline" size={32} color="#fff" />
      </TouchableOpacity>
      }
    </View>
  );
}
  const styles = StyleSheet.create({ 
    bigButtonContainerLeft:{
      flex:1,
      flexDirection:'row',
      width:Dimensions.get('screen').width,
      backgroundColor:'#118ab200',
      justifyContent:'space-between',
      alignItems:'flex-start',
      backgroundColor:'#118ab2',
      paddingVertical:20,
      paddingHorizontal:30,
    },
    bannerImageMenu:{
      width:30,
      height:30,
    }
});