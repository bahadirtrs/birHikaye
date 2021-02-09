import React from 'react';
import {StyleSheet, View, Image } from 'react-native';

export default function Logo(props) {
  return (
    <Image style={styles.bannerImage} source={require('../../icon/logoyy.png')}/>
    );
}
  const styles = StyleSheet.create({
      bannerImage:{
        height:140,
        width:140,
        borderRadius:10,
        marginBottom:20,
        marginTop:40,
    },
});