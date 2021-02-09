import React from 'react';
import {StyleSheet, Image, View, Dimensions } from 'react-native';

export default function ListImage(props) {
  return (
    <View>
      <Image style={styles.bannerImage} source={{uri:props.image}}/>
    </View>
    );
}
    const styles = StyleSheet.create({
        bannerImage:{
        width:100,
        height:70,
    }      
});