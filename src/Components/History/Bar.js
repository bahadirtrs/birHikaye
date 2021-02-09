import React from 'react';
import {StyleSheet, View, Text, Dimensions } from 'react-native';
import BarElements from './BarElements'
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')
export default function Bar(props) {
  return (
    <View style={styles.container} >
      <BarElements unname={'Kategori'} name={props.kategori} />
      <BarElements unname={'Tarih'}  name={props.tarih && moment(props.tarih.toDate()).format('LL')}  />
      <BarElements unname={'Görüntüleme'}  name={props.goruntuleme} /> 
    </View>
    );
}
    const styles = StyleSheet.create({
      container:{ 
        flex:1, 
        flexDirection:'row', 
        width:Dimensions.get('screen').width, 
        justifyContent:'space-around',
      },     
});