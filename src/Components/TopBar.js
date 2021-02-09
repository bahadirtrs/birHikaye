import React from 'react';
import {StyleSheet, Image, Text, View,TouchableOpacity,TouchableHighlight } from 'react-native';

function TopBar(props) {
    return (
      <View style={styles.container}>
       <TouchableHighlight onPress={props.butonPress}>
          <Image source={require('../icon/menu.png' )} style={styles.profilePic} />   
        </TouchableHighlight>
        <Text style={{fontWeight:'bold', fontSize:20, color:'#fff'}} >Bir Hikaye</Text>
        <TouchableOpacity>
        <Image source={require('../icon/search.png' )} style={styles.profilePic} />   
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between', 
      alignItems:'center', 
      backgroundColor:'#118ab2'
    },

    profilePic:{
        width:25,
        height:25,
        margin:10,
    }
       
});

  export default TopBar;