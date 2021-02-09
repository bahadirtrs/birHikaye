import React from 'react';
import {StyleSheet, Image, View, Dimensions } from 'react-native';

export default function Line(props) {
  return (
    <View style={{ alignItems:'center', justifyContent:'center'}} >
        <View style={styles.container} />
    </View>
    );
}
    const styles = StyleSheet.create({
        container:{
        width:Dimensions.get('screen').width-40,
        height:1,
        backgroundColor:'#ccc',
        marginTop:10,
        marginBottom:10
    }      
});