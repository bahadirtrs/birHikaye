import React from 'react';
import {StyleSheet, Image, View, Dimensions } from 'react-native';

export default function BannerImage(props) {
  return (
    <View>
      <Image style={styles.bannerImage} source={{uri:props.image}}/>
    </View>
    );
}
    const styles = StyleSheet.create({
        bannerImage:{
        width:Dimensions.get('screen').width,
        height:250
    }      
});