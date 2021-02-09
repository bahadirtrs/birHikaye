import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar,Text, SafeAreaView, Dimensions,TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { set } from 'react-native-reanimated';

function AddPost({ navigation }) {

  const [tarih, setTarih]=useState()
  const [url, setUrl]=useState()
  const [baslik, setBaslik]=useState()
  const [kategori, setKategori]=useState()
  const [ozet, setOzet]=useState()
  const [alan1, setAlan1]=useState()
  const [alan2, setAlan2]=useState()
  const [alan3, setAlan3]=useState()
  const [alan4, setAlan4]=useState()
  const [alan5, setAlan5]=useState()

  const KayitEkle = () => {
    firestore()
    .collection('Post').doc(tarih)
    .set({
      baslik:baslik,
      kategori:kategori,
      ozet:ozet,
      image:url,
      yaziAlani1:alan1,
      yaziAlani2:alan2,
      yaziAlani3:alan3,
      yaziAlani4:alan4,
      yaziAlani5:alan5,
      none:tarih,
      goruntuleme:'6536',
      tarih:firestore.FieldValue.serverTimestamp(),
    })
      setTarih(),
      setBaslik(),
      setKategori(), 
      setOzet(), 
      setUrl(), 
      setOzet(), 
      setAlan1(), 
      setAlan2(), 
      setAlan3(), 
      setAlan4(), 
      setAlan5()
   
    }
  
  return (
    <>
    <StatusBar barStyle="light-content"  backgroundColor='#118ab2'/>
    <SafeAreaView/>
    <ScrollView>  
      <View style={styles.container}>  
      <Text style={{fontSize:30}} >Yazı Ekle</Text>

      <TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Tarih (örn: 2922021 )"
        fontSize={16}
        onChangeText={text => setTarih(text)}
        value={tarih}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
        
      />

      <TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70, height:80}}
        placeholder="Fotoğraf Urlsi"
        fontSize={16}
        onChangeText={text => setUrl(text)}
        value={url}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />


<TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70, height:80}}
        placeholder="Başlık"
        fontSize={16}
        onChangeText={text => setBaslik(text)}
        value={baslik}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />

<TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Kategori"
        fontSize={16}
        onChangeText={text => setKategori(text)}
        value={kategori}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />


<TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Özet"
        fontSize={16}
        onChangeText={text => setOzet(text)}
        value={ozet}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />


<TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Alan 1"
        fontSize={16}
        onChangeText={text => setAlan1(text)}
        value={alan1}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />

<TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Alan 2"
        fontSize={16}
        onChangeText={text => setAlan2(text)}
        value={alan2}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />
      <TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Alan 3"
        fontSize={16}
        onChangeText={text => setAlan3(text)}
        value={alan3}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />

<TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Alan 4"
        fontSize={16}
        onChangeText={text => setAlan4(text)}
        value={alan4}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />


<TextInput
        style={{fontSize:18,paddingHorizontal:10, position:'relative', margin:10, paddingVertical:10, borderColor:'#bbb', borderRadius:10, borderWidth:1, width:Dimensions.get("window").width-70}}
        placeholder="Alan 5"
        fontSize={16}
        onChangeText={text => setAlan5(text)}
        value={alan5}
        textAlignVertical='center'
        multiline={true}
        scrollEnabled={true}  
      />

      <TouchableOpacity style={{backgroundColor:'#118ab2', paddingVertical:10, paddingHorizontal:80, borderRadius:10,margin:20}} onPress={()=>KayitEkle()} >
        <Text style={{fontSize:20, color:'white' }} >Yazıyı ekle</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  <SafeAreaView/>
    </>
  );
  }
const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:'#f1f1f1',
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'center',
  },
});
  export default AddPost;