import React, { useState } from "react";
import {Modal,StyleSheet,Text,View,TouchableOpacity, TouchableHighlight, Touchable, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const InfoModal = (props) => {
  return (
      <Modal animationType="slide" transparent={true} visible={props.butonPress}  >
        <TouchableOpacity activeOpacity={1} onPress={props.modalPress} style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{width:'100%', height:'100%' }} >
              <TouchableOpacity activeOpacity={1} style={{padding:15, margin:10 }} >
              <Text style={styles.modalTextTitle}>Merhaba</Text>
              <Text style={styles.modalText}>
                Sizden benzersiz bir kullanıcı adı girmenizi istiyoruz. 
                </Text><Text style={styles.modalText}>
                Ayrıca kimsenin tahmin edemeyeceği bir "Anahtar" girmeniz de gerekmekte.
                </Text><Text style={styles.modalText}>
                Bu kullanıcı adı ve anahtar başka bir cihazda uygulamayı kullanmaya devam edebilmek için oldukça önemlidir.
                </Text>
                <TouchableOpacity onPress={props.modalPress}  style={{backgroundColor:'#118ab2', paddingVertical:8, borderRadius:15}} >
                  <Text style={{textAlign:'center', fontSize:18, color:'#fff', fontFamily:'Poppins-Medium'}} >Anladım</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
  );
};
const styles = StyleSheet.create({

  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    height:'60%',
    width:'90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
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
  
  modalText: {
    marginBottom: 10,
    textAlign: "left",
    fontSize:16,
    width:'100%',
    fontFamily:'Poppins-Regular',
  },
  modalTextTitle: {
    marginBottom: 16,
    textAlign: "center",
    fontSize:28,
    fontFamily:'Poppins-Bold'
  },
});

export default InfoModal;