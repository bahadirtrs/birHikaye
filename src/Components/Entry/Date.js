import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')

export default function Logo(props) {
  return (
    <Text style={styles.date} >{moment().format('LLLL')}</Text>
  );
}
  const styles = StyleSheet.create({ 
    date:{
      fontSize:14,
      color:'#fff',
      textAlign:'left',
      marginVertical:50,
      fontFamily:'GoogleSans-Regular'
    },
});