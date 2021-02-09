import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Info(props) {
  return (
    <TouchableOpacity onPress={props.butonPress}>
          <Icon name="information-circle-outline" size={35} color="#fff" />
    </TouchableOpacity>
  );
}
  const styles = StyleSheet.create({ 
    bigButtonContainer:{
      flex:1,
      backgroundColor:'#118ab2',
      alignItems:'flex-end',
      padding:10
    },

    bannerImage:{
      width:32,
      height:32
    }
});