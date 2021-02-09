import React, { useState } from "react";
import {Modal,StyleSheet,Text,View,TouchableOpacity, ActivityIndicator, Dimensions, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const InfoModal = (props) => {

  return (
    <>
   
      <Modal animationType="fade" transparent={true} visible={props.butonPress}  >
       { !props.like  ?
         <TouchableOpacity activeOpacity={0.5} onPress={props.modalPress} style={styles.centeredView}>
         <View style={styles.modalView}>
             <TouchableOpacity activeOpacity={1} style={{ justifyContent:'center', alignItems:'center', width:'100%'}} >
                <Icon name="thumbs-up" size={120} color="#118ab2" />
                   <Text style={styles.modalTextTitle}>İşlem Başarılı</Text>
                <Text style={styles.modalText}>{props.title} adlı hikaye beğenilen hikayeler arasından çıkartıldı.</Text>
             </TouchableOpacity>      
         </View>
       </TouchableOpacity>      
:
        <TouchableOpacity activeOpacity={0.5} onPress={props.modalPress} style={styles.centeredView}>
          <View style={styles.modalView}>
             <TouchableOpacity activeOpacity={0.5} style={{ justifyContent:'center', alignItems:'center', width:'100%'}} >
             <Icon name="check-circle" size={120} color="#118ab2" />
                  <Text style={styles.modalTextTitle}>Hikaye Kaydedildi</Text>
                  <Text style={styles.modalText}>Beğendiğiniz tüm hikayeler daha sonra tekrardan okuyabilmeniz için kaydedilir.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.clickPress} activeOpacity={0.5} style={{ backgroundColor:'#118ab2', padding:10, marginHorizontal:10, marginVertical:10, borderRadius:10}} >
                 <Text style={styles.modalButtonText}>Tüm Begenilenleri Görüntüle </Text>
              </TouchableOpacity>
          </View>
        </TouchableOpacity>

}

      </Modal>
      </>
  );
};
const styles = StyleSheet.create({

  centeredView: {
    flex:1,
    height:'100%',
    justifyContent:'flex-end',
    alignItems: 'center',
    opacity:1,
    backgroundColor:'#00000050'
    
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
  
  modalButtonText: {
    marginBottom: 0,
    textAlign: "center",
    fontSize:16,
    width:'100%',
    color:'white',
    fontFamily:'GoogleSans-Bold'
  },

  modalText: {
    paddingHorizontal:30,
    paddingVertical:2,
    textAlign: "center",
    fontSize:14,
    width:'100%',
    color:'black',
    fontFamily:'GoogleSans-Regular'
  },

  modalTextTitle: {
    marginVertical: 10,
    textAlign: "center",
    fontSize:26,
    fontFamily:'GoogleSans-Bold'
  },
  bannerImage:{
    height:120,
    width:120,
    borderRadius:10,
    marginBottom:20,
   
},
});

export default InfoModal;