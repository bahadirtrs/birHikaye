import React, { useState } from "react";
import {Modal,StyleSheet,Text,View,TouchableOpacity, TouchableHighlight} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const InfoModal = (props) => {
  return (
      <Modal animationType="slide" transparent={true} visible={props.butonPress}  >
        <TouchableOpacity activeOpacity={1} onPress={props.modalPress} style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{width:'100%', height:'100%', }} >
              <TouchableOpacity activeOpacity={1} style={{padding:30, margin:10}} >
              <Text style={styles.modalTextTitle}>Bir Hikaye Nedir?</Text>
              <Text style={styles.modalText}>
                Bir hikaye her gün anlamlı hikayeler yayınlayan bir uygulamadır.
                </Text><Text style={styles.modalText}>
                Hikayeler her gün saat 00.00 da yayınlanır ve saat 23.55'de yayından kaldırılır.
                </Text><Text style={styles.modalText}>
                Yayınlanan hikayelerin arasında güncel konular olduğu gibi insan hayatını olumlu yönde etkileyecek,
                kişisel gelişimi destekleyecek türde yazılar bulunmaktadır.
                </Text><Text style={styles.modalText}>
                Kullanıcı her gün yalnızca bir hikayeyi defalarca okuyabilir, bu hikayeyi diğer kullanıcılarla paylaşabilir ve beğenebilir.
                </Text>
                <Text style={styles.modalText}>
                Begenilen hikayeler, <Text style={{fontWeight:'bold'}} >Beğendiklerim</Text> sayfasında kayıt altında tutulur ve tekrardan okunabilir.
                </Text>
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
    opacity:1,
  },
  modalView: {
    height:'70%',
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
    marginBottom: 16,
    textAlign: "left",
    fontSize:16,
    width:'100%',
    fontFamily:'Poppins-Regular'
  },
  modalTextTitle: {
    marginBottom: 16,
    textAlign: "center",
    fontSize:28,
    fontFamily:'Poppins-Bold'
  },
});

export default InfoModal;