import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar,ActivityIndicator, Text, SafeAreaView, Dimensions } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import ListImage from '../Components/History/ListImage'
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')

function Storys({ route, navigation }) {
  const {username} = route.params;
  const [story, setStory]=useState()
  const [desc, setDesc]=useState('desc')
  const [activityIndicator, setActivityIndicator]=useState(false)


  const Activator = () =>{
    setActivityIndicator(!activityIndicator)
    return () => 1;  
  }

  useEffect(() => {
    setTimeout(Activator,300);
    const subscriber = firestore()
    .collection('Story').doc(username)
    .collection('Post')
    .orderBy('tarih', desc)
      .onSnapshot(querySnapshot => {
        const user = [];
        querySnapshot.forEach(documentSnapshot => {
          user.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setStory(user);
      });
  }, [])
  return (
    <>
    <StatusBar barStyle="light-content"  backgroundColor='#118ab2'/>
    <SafeAreaView style={{backgroundColor:'#118ab2'}}  />
      <View style={styles.container}>  
      {!activityIndicator ?
        <View style={{ backgroundColor:'#118ab2',  height:Dimensions.get('screen').height, width:Dimensions.get('screen').width, justifyContent:'center', alignItems:'center'}} >
          <ActivityIndicator size='large' color="#fff" />
          <Text style={{fontSize:20, color:'#fff', fontFamily:'GoogleSans-Medium', textAlign:'center', marginTop:30}} >Hikayeler yükleniyor...</Text>
        </View>
        :
        <>
        <View style={{ width:Dimensions.get('screen').width, backgroundColor:'#118ab2'}} >
        <Text style={{fontSize:20, color:'#fff', textAlign:'center', fontFamily:'GoogleSans-Bold', paddingVertical:10}} >Beğenilen Hikayeler</Text>
        </View>
        <FlatList
        data={story}
        scrollEnabled={true}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <View>
         
            <TouchableOpacity onPress={() => navigation.push('Bugünün Hikayesi',{username:username, type:'kayit', dateType:item.none })} activeOpacity={0.7} style={{ width:Dimensions.get('screen').width, flexDirection:'row', justifyContent:'space-between', alignItems:'center' , borderBottomWidth:1, borderBottomColor:'#bbb' ,backgroundColor:'#f1f1f1'}} >
              <ListImage image={item.image && item.image} />
              <View style={{ padding:5, width:Dimensions.get('screen').width-110}} >
                <Text style={{fontSize:18, fontFamily:'GoogleSans-Medium'}}>{ item.tarih && moment(item.tarih.toDate()).format('LL')}, {item.tarih && moment(item.tarih.toDate()).format('dddd') } </Text>
                <Text style={{fontSize:14, fontFamily:'GoogleSans-Regular'}} >{item.baslik}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        />
        </>
}
      </View>
    </>
  );
  }
const styles = StyleSheet.create({
  container:{
    width:Dimensions.get('screen').width,
    flex: 1, 
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'flex-start',
  },
});
  export default Storys;