import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function Abstract(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.text}</Text>
    </View>
    );
}
    const styles = StyleSheet.create({
      container:{
        paddingVertical:10,
        paddingHorizontal:15,
      },     
      
      title:{
        fontSize:16,
        color:'#222',
        textAlign:'left',
        lineHeight:23,
        fontFamily:'GoogleSans-Medium'
      }
});