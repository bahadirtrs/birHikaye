import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StatusBar, Touchable} from 'react-native';
import {login_screen} from '../styles/page_styles';
import Icon from 'react-native-vector-icons/Ionicons';


function FormComponentLogIn({pagePress, setEmail, password, setPassword,uyari, onButtonText, butonPress,email}) {
  const [isShowing, setShowing] = useState(false);
  

  return (
    <View>
     <StatusBar barStyle="dark-content"  backgroundColor='#118ab2'/>
     <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:10}} >
     <Image source={require('../icon/logoy.png')} style={login_screen.logo}/>
        <Text style={{lineHeight:53, fontSize:50, fontFamily:'GoogleSans-Bold', color:'#fff'}} >bir hikaye</Text>
        <Text style={{lineHeight:20, fontSize:17, fontFamily:'GoogleSans-Regular', color:'#fff'}} >bazı hikayeler asla unutulmaz</Text>
     </View>
     <View style={{ justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize:16, color:'white', fontFamily:'GoogleSans-Regular' }}></Text>
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

    
       
        
        </View>
        </View>
        <View style={{ justifyContent:'flex-start', alignItems:'flex-start'}} >
      
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
  
       
        </View>
      
      </View>
      <TouchableOpacity style={login_screen.button} onPress={butonPress}>
        <Text style={login_screen.buttonText}>{onButtonText}</Text>
      </TouchableOpacity>
        
     
        {
  uyari==''
   ? 
   <TouchableOpacity onPress={pagePress} style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
          <Text style={{lineHeight:25, fontSize:15, fontFamily:'GoogleSans-Regular', color:'#fff'}} >Hesabınız yok mu?</Text>
          <Text style={{lineHeight:30, fontSize:15, fontFamily:'GoogleSans-Bold', color:'#fff'}} > Kayıt Olun</Text>
    </TouchableOpacity>
  
  :<View style={{justifyContent:'center', alignItems:'center'}} >
    <Text style={{fontSize:13, color:'#fff', fontFamily:'GoogleSans-Regular',}} >{uyari}</Text>
   </View>
}
      
    </View>
  );
}
export {FormComponentLogIn};