import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {StyleSheet, Text, View, StatusBar,Dimensions,Image, ActivityIndicator, SafeAreaView, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BannerImage from '../Components/History/bannerImage'
import Line from '../Components/History/Line';
import Title from "../Components/History/Title";
import Abstract from '../Components/History/Abstract';
import Content from '../Components/History/Content';
import Bar from '../Components/History/Bar';
import Buttoning from '../Components/History/Buttoning';
import InfoModal from '../Components/History/InfoModal'

function HomeScreen({ route, navigation }) {
  const {username} = route.params;
  const {type} = route.params;
  const {dateType} = route.params;
  const [data, setData]=useState([])
  const [date, setDate]=useState()
  const [like, setLike]=useState(true)
  const [activityIndicator, setActivityIndicator]=useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2]=useState(false);

  useEffect(() => {
    if(type && type=='kayit'){
      sorgu=dateType;
    }else{
      var tarih= new Date()
      if(tarih.getHours()>8){ // saat 8den büyükse yeni hikayeyinin id sini sorgula
        var sorgu=(String(tarih.getDate())+String(tarih.getMonth())+String(tarih.getFullYear()))
       // var sorgu='3102021'
      }else{
        var sorgu=(String(tarih.getDate()-1)+String(tarih.getMonth())+String(tarih.getFullYear()))
      }  
      setDate(sorgu)
    }

    firestore().collection('Story').doc(username).collection('Post').doc(sorgu).get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        setLike(true)
        }else{
        setLike(false)
        }
      })
    storyReturn(sorgu);
    }, [])


    const storyReturn = (sorgu)=>{
      const subscriber = firestore()
      .collection('Post')
      .doc(sorgu)
      .onSnapshot(documentSnapshot => {
        setData(documentSnapshot.data())
      });
        Goruntulenme(sorgu);  
        setTimeout(Activator,500);
      return () => subscriber();  
    }


  const Goruntulenme = (sorgu) =>{
    const postReference = firestore().doc(`Post/${sorgu}`);
    return firestore().runTransaction(async transaction => {
    const postSnapshot = await transaction.get(postReference);
    if (!postSnapshot.exists) {
    }
    await transaction.update(postReference, {
      goruntuleme: postSnapshot.data().goruntuleme + 1,
    });
  });
  }



  const Activator = () =>{
    setActivityIndicator(!activityIndicator)
    return () => 1;  
  }
  
  const storySave = () => {
    setActivityIndicator(!activityIndicator)
    firestore().collection('Story').doc(username).collection('Post').doc(data.none).get()
    .then(documentSnapshot => {
      if (!documentSnapshot.exists) {
        firestore()
        .collection('Story').doc(username).collection('Post').doc(data.none)
        .set({
          baslik:data.baslik,
          kategori:data.kategori,
          ozet:data.ozet,
          image:data.image,
          yaziAlani1:data.yaziAlani1,
          yaziAlani2:data.yaziAlani1,
          yaziAlani3:data.yaziAlani1,
          yaziAlani4:data.yaziAlani1,
          yaziAlani5:data.yaziAlani1,
          none:data.none,
          goruntuleme:23,
          tarih:data.tarih,
        })
        .then(() => {
          setLike(true)
          setModalVisible(!modalVisible) 
        });
      }else{
        firestore().collection('Story').doc(username).collection('Post').doc(data.none).delete()
        setLike(false)
        setModalVisible(!modalVisible)
      }
      setActivityIndicator(!false)
    });
  }

  const Close = ()=>{
    setModalVisible(!modalVisible)
    navigation.replace('Begenilen Hikayeler', {username:username})
  }

  const LoginPress=() =>{
    setModalVisible2(!modalVisible2)
    navigation.navigate('Giriş Yap')
  }

  return (
    <>
      <View style={styles.container}>  
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <ScrollView>
        <View >
      {!activityIndicator ?
        <View style={{ backgroundColor:'#118ab2',  height:Dimensions.get('screen').height, width:Dimensions.get('screen').width, justifyContent:'center', alignItems:'center'}} >
          <ActivityIndicator size='large' color="#fff" />
          <Text style={{fontSize:20, color:'#fff', fontFamily:'GoogleSans-Medium', textAlign:'center', marginTop:30}} >İşlem tamamlanıyor...</Text>
        </View>
      :data 
        ? <>
          <BannerImage  image={data.image && data.image} />
          <InfoModal 
            activityIndicator={activityIndicator} 
            title={data.baslik && data.baslik} 
            like={like} 
            clickPress={()=>Close()} 
            modalPress={() => {setModalVisible(!modalVisible)}} 
            butonPress={modalVisible} 
          />
          <Buttoning 
            like={like} 
            username={username}
            butonPress={()=>storySave()} 
            loginPress={()=>LoginPress()}
            modalPress={()=>setModalVisible2(!modalVisible2)}
            modalVisible2={modalVisible2}
          />
          <Title 
            title={data.baslik && data.baslik}
          />
          <Line/>
          <Bar 
            kategori={data.kategori && data.kategori} 
            tarih={data.tarih && data.tarih} 
            goruntuleme={data.goruntuleme} />
          <Line/>
          <Abstract text={data.ozet && data.ozet} />
          <Content text={data.yaziAlani1 && data.yaziAlani1}/>
          <Content text={data.yaziAlani2&& data.yaziAlani2}/>
          <Content text={data.yaziAlani3&& data.yaziAlani3}/>
          <Content text={data.yaziAlani4&& data.yaziAlani4}/>
          <Content text={data.yaziAlani5&& data.yaziAlani5}/>
          <Line/>
          </>
        : <>
       <SafeAreaView/>
       <View style={{ height:Dimensions.get('screen').height-100, flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', padding:50}} >
       <Image style={{width:150,height:150, margin:30}} source={require('../icon/write.png')}/> 
       <Text style={{fontSize:28, color:'#444', fontFamily:'GoogleSans-Medium', textAlign:'center'}} >Sizin için yazıyoruz {} </Text>
       <Text style={{fontSize:16, color:'#444', fontFamily:'GoogleSans-Regular', textAlign:'center'}} >Yeni hikaye birazdan sizlerle</Text>
       </View>
       <SafeAreaView/>
       </>
      }
    </View>
     
        </ScrollView>
      </View>
    </>
  );
  }
const styles = StyleSheet.create({
  container:{
    flex: 1, 
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'flex-start',
  },
});
  export default HomeScreen;