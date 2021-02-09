import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function Title(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >{props.title}</Text>
    </View>
    );
}
    const styles = StyleSheet.create({
        container:{
            paddingVertical:10,
            paddingHorizontal:30,
        },     
        title:{
            fontSize:30,
            textAlign:'center',
            color:'#444',
            fontFamily:'GoogleSans-Medium',
            lineHeight:35
        }
});