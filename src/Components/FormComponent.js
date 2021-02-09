import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StatusBar, Touchable} from 'react-native';
import {login_screen} from '../styles/page_styles';
import LoginModal from './LoginModal';
import Icon from 'react-native-vector-icons/Ionicons';


function FormComponent({pagePress,setEmail, password,passwordTwo, setPassword, setPasswordTwo,uyari, onButtonText, butonPress, control, email}) {
  const [isShowing, setShowing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  

  return (
    <View>
     <StatusBar barStyle="dark-content"  backgroundColor='#118ab2'/>
     <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:10}} >
     <Image source={require('../icon/logoy.png')} style={login_screen.logo}/>
        <Text style={{lineHeight:53, fontSize:50, fontFamily:'GoogleSans-Bold', color:'#fff'}} >bir hikaye</Text>
        <Text style={{lineHeight:20, fontSize:17, fontFamily:'GoogleSans-Regular', color:'#fff'}} >bazı hikayeler asla unutulmaz</Text>
    </View>
     <LoginModal modalPress={() => {setModalVisible(!modalVisible)}} butonPress={modalVisible} />
      <View style={{ justifyContent:'flex-start', alignItems:'center'}} >
        <Text style={{fontSize:20, color:'white', fontFamily:'GoogleSans-Bold' }} ></Text>
      </View>
      <View style={login_screen.TextInputStyle}> 
      <Icon name="person-circle-sharp" size={25} color="#f1f1f1" />
      <TextInput
        padding={2}
        fontFamily={'GoogleSans-Regular'}
        color={'#eee'}
        fontSize={16}
        value={email}
        placeholder="Kullanıcı adı"
        keyboardType='default'
        autoCapitalize="none"
        placeholderTextColor="#ffffff60"
        onChangeText={(email) => setEmail(email)}
        style={{flex: 1}}>
       </TextInput>

       <View style={{ justifyContent:'center', alignItems:'center'}} >

        {email =='' ? null
        : email.length < 5 
        ?   <TouchableOpacity onPress={()=>setEmail('')} >
               <Icon name="close-outline" size={25} color="#ff5e78" /> 
            </TouchableOpacity> 
            :control 
            ? <Icon name="checkmark-outline" size={25} color="#A0D93F" />    
            :<TouchableOpacity onPress={()=>setEmail('')} >
                <Icon name="close-outline" size={25} color="#ff5e78" /> 
             </TouchableOpacity>   
       
        }
        </View>
        </View>
       
      <View style={login_screen.TextInputStyle}>
      <Icon name="key" size={25} color="#f1f1f1" />


        <TextInput
          padding={2}
          fontFamily={'GoogleSans-Regular'}
          color={'#eee'}
          fontSize={16}
          placeholder="Anahtar"
          placeholderTextColor="#ffffff60"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={{flex: 1}}></TextInput>
          <View style={{ justifyContent:'center', alignItems:'center'}} >
          {password.length != 0 ?
          password.length > 4  
            ? <Icon name="checkmark-outline" size={25} color="#A0D93F" />  
            : <TouchableOpacity onPress={()=>setPassword('')} >
                <Icon name="close-outline" size={25} color="#ff5e78" />
            </TouchableOpacity>   
          :null
        }
        </View>
      
      </View>

      <View style={login_screen.TextInputStyle}>
      <Image source={require('../icon/key2.png' )} style={{width:20,marginRight:5,height:20}} /> 

        <TextInput
          padding={2}
          fontFamily={'GoogleSans-Regular'}
          placeholderStyle={{fontFamily:'GoogleSans-Regular'}}
          color={'#eee'}
          fontSize={16}
          placeholder="Anahtar Tekrarı"
          value={passwordTwo}
          secureTextEntry={true}
          placeholderTextColor="#ffffff60"
          onChangeText={(password) => setPasswordTwo(password)}
          style={{flex: 1}}></TextInput>
        <View style={{ justifyContent:'center', alignItems:'center'}} >
          {passwordTwo!='' ?
          password == passwordTwo
            ? <Icon name="checkmark-outline" size={25} color="#A0D93F" />  
            : <TouchableOpacity onPress={()=>setPasswordTwo('')} >
                <Icon name="close-outline" size={25} color="#ff5e78" />
            </TouchableOpacity>   
          :null
        }
        </View>
      </View>
      <TouchableOpacity  style={login_screen.button} onPress={butonPress}>
        <Text style={login_screen.buttonText}>{onButtonText}</Text>
      </TouchableOpacity>
        {uyari=='' ? 
          <TouchableOpacity  onPress={pagePress}  style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
            <Text style={{lineHeight:25, fontSize:15, fontFamily:'GoogleSans-Regular', color:'#fff'}} >Hesabınız mı var?</Text>
            <Text style={{lineHeight:30, fontSize:15, fontFamily:'GoogleSans-Bold', color:'#fff'}} > Giriş yapın</Text>
          </TouchableOpacity>
          :
          <View style={{ justifyContent:'center', alignItems:'center', paddingBottom:10}} >
            <Text style={{fontSize:13, color:'white', fontFamily:'GoogleSans-Regular'}} >  {uyari}</Text>
          </View>
        }
    </View>
  );
}
export {FormComponent};