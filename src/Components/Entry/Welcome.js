import React, { useState, useEffect } from "react";
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function Welcome(props) {
  const[data, setData]=useState([])
   
  useEffect(() => {
    var tarih= new Date()
    if(tarih.getHours()>8){
      var sorgu=(String(tarih.getDate())+String(tarih.getMonth())+String(tarih.getFullYear()))
    }else{
      var sorgu=(String(tarih.getDate()-1)+String(tarih.getMonth())+String(tarih.getFullYear()))
    }   
    const subscriber = firestore()
      .collection('Post')
      .doc(sorgu)
      .onSnapshot(documentSnapshot => {
        setData(documentSnapshot.data())
      });
    return () => subscriber();     
  },[])

  return (
    <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={props.butonPress}>
      <Text style={styles.titleOne} >bugünün</Text>
      <Text style={styles.title} >hikayesi</Text>
      <View style={{width:'70%'}} >
        <Text style={styles.titleDescription} >{data.baslik}</Text>
      </View>
    </TouchableOpacity>
    );
}
    const styles = StyleSheet.create({
      title:{
        fontSize:60,
        color:'#fff',
        textAlign:'center',
        fontFamily:'GoogleSans-Bold',
        lineHeight:60,
      },
      titleOne:{
        fontSize:49,
        color:'#fff',
        textAlign:'center',
        fontFamily:'GoogleSans-Bold',
        lineHeight:54,
      },
  
      titleDescription:{
        fontSize:16,
        color:'#fff',
        fontFamily:'GoogleSans-Regular',
        textAlign:'center'
        
      },
});