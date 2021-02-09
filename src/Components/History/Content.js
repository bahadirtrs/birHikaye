import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function Content(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >{props.text}</Text>
    </View>
    );
}
    const styles = StyleSheet.create({
      container:{
        paddingVertical:5,
        paddingHorizontal:15,
        
      },     
      
      title:{
        fontSize:16,
        color:'#222',
        fontFamily:'GoogleSans-Regular',
        textAlign:'left',
        lineHeight:23
      }
});