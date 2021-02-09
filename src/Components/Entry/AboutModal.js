import React, {useState, useEffect} from 'react';
import {Modal,StyleSheet,Text,View,TouchableOpacity, Image} from "react-native";
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AboutModal = (props) => {
  const [pass, setPass]=useState(false)
  const [data, setData]=useState()

  

  useEffect(() => {
    firestore()
    .collection('User')
    .doc(props.username)
    .onSnapshot(documentSnapshot => {
      setData(documentSnapshot.data())
    }); 
  }, [pass])
  return (
      <Modal animationType="fade" transparent={true} visible={props.butonPress}  >

        {
          props.info!=null
          ?
        <TouchableOpacity activeOpacity={1} onPress={props.modalPress} style={styles.centeredView}>
          <View style={styles.modalView}>
         
          <TouchableOpacity activeOpacity={1} style={{ justifyContent:'center', alignItems:'center', width:'100%', paddingHorizontal:30,}} >
          <Icon name="information" size={120} color="#118ab2" />
            <Text  style={{fontFamily:'GoogleSans-Regular', fontSize:16, textAlign:'center'}} >{props.info}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={props.loginPress} activeOpacity={0.9} style={styles.modalButton} >
             <Text style={styles.modalButtonText} >Giriş Yap</Text>
          </TouchableOpacity>

          </View>
        </TouchableOpacity>
        :
        <TouchableOpacity activeOpacity={1} onPress={props.modalPress} style={styles.centeredView}>
          <View style={styles.modalView}>
             <TouchableOpacity activeOpacity={1} style={{ justifyContent:'flex-start', alignItems:'flex-start', width:'100%', paddingHorizontal:40,}} >
                  <Text style={styles.modalTextTitle}>Kullanıcı Bilgileri</Text>
                  <Text style={styles.modalText}>Kullanıcı Adı: {props.username}</Text>
             <TouchableOpacity onPress={()=>setPass(!pass)} >
                {
                  !pass
                  ? <Text style={styles.modalText}>Anahtarı göster</Text>
                  : <Text style={styles.modalText}>Anahtar: {data && data.password} </Text>

                }
                 </TouchableOpacity>

                 <TouchableOpacity onPress={props.quickButton} activeOpacity={0.5} style={{width:'100%', backgroundColor:'#118ab2', padding:10, marginHorizontal:0, marginVertical:10, borderRadius:10}} >
                   <Text style={styles.modalButtonText}>Çıkış Yap</Text>
                 </TouchableOpacity>
              </TouchableOpacity>
          </View>
        </TouchableOpacity>
        }
         
      </Modal>
  );
};
const styles = StyleSheet.create({

  centeredView: {
    flex:1,
    height:'100%',
    justifyContent:'flex-end',
    alignItems: 'center',
    opacity:1,
    backgroundColor:'#00000050',
    
  },
  modalView: {
    width:'100%',
    paddingVertical:40,
    backgroundColor: "white",
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalButton:{
    backgroundColor:'#118ab2', 
    paddingVertical:10, 
    width:'80%', 
    justifyContent:'center',  
    alignItems:'center', 
    borderRadius:10, 
    marginVertical:10
  },
  
  modalButtonText: {
    marginBottom: 0,
    textAlign: "center",
    fontSize:16,
    width:'100%',
    color:'white',
    fontFamily:'GoogleSans-Bold'
  },

  modalText: {
    paddingVertical:2,
    textAlign: "left",
    fontSize:16,
    width:'100%',
    color:'black',
    fontFamily:'GoogleSans-Regular'
    
  },

  modalTextTitle: {
    marginBottom: 10,
    textAlign: "center",
    fontSize:26,
    fontFamily:'GoogleSans-Bold'
  },
  bannerImage:{
    height:130,
    width:130,
    borderRadius:10,
    marginBottom:10,
   
},
});

export default AboutModal;