import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Share, Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AboutModal from '../Entry/AboutModal';
import Icon from 'react-native-vector-icons/Ionicons';

const onShare = async () => {
    try {
      const result = await Share.share({
        message:'Heyy bu uygulama çok iyi. Her gün bir güzel hikaye paylaşıyır.Hemen denemelisin; https://play.google.com/store/apps/details?id=com.birhikaye'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } 
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

export default function Buttoning(props) {
  const [info,setInfo]=useState("Bu hikayeyi beğenebilmeniz için öncelikle giriş yapmanız gerekmektedir.")

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    {
      !props.username ?

       <TouchableOpacity  onPress={props.modalPress} style={styles.container} >
          <Icon name="heart-dislike-outline" size={28} color="#fff" />
       </TouchableOpacity>
       :
       <TouchableOpacity  onPress={props.butonPress} style={styles.container} >
       {props.like 
         ? <Icon name="heart-sharp" size={28} color="#fff" />
         : <Icon name="heart-outline" size={28} color="#fff" />
  
       }
     </TouchableOpacity>
      }
   
      <AboutModal info={info}  loginPress={props.loginPress} quickButton={props.quickButton} username={props.username} modalPress={props.modalPress} butonPress={props.modalVisible2} />
      <TouchableOpacity onPress={onShare} style={styles.container} >
        <Icon name="share-social" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
    width:60,
    height:60,
    maxWidth:60,
    top:-30,
    flex:1,
    marginHorizontal:30,
    backgroundColor:'#118ab2',
    borderRadius:30,
    marginBottom:-20,
    elevation:3,
    justifyContent:'center',
    alignItems:'center',
},
profilePic:{
    width:25,
    height:25,
    margin:10,
}
});