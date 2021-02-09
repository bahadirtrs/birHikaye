import React from 'react';
import {StyleSheet, View, Text } from 'react-native';


export default function BarElements(props) {
  return (
      <View style={styles.container}>
          <Text style={styles.Onetitle}>{props.unname}</Text>
          <Text style={styles.title}>{props.name}</Text>
      </View >
      
    );
}
    const styles = StyleSheet.create({
      container:{
        paddingVertical:0,
        paddingHorizontal:15,
        borderRightWidth:1,
        borderRightColor:'#ccc',
        flex:1
      },     
      Onetitle:{
        fontSize:14,
        color:'#333',
        textAlign:'center',
        fontFamily:'GoogleSans-Bold'
      },

      title:{
        fontSize:13,
        color:'#333',
        textAlign:'center',
        fontFamily:'GoogleSans-Regular'
      }
});