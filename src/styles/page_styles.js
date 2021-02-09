import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const login_screen = StyleSheet.create({
  keyboard_view: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 30
  },
  box: {
    marginVertical: 30,
    alignSelf:'center',
  },
  button: {
    margin: 20,
    borderRadius: 15,
    fontSize: 20,
    height: 50,
    width: device_size.width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#118ab2',
    fontSize: 18,
    fontFamily:'GoogleSans-Bold'
    },

  TextInputStyle: {
    fontSize: 27,
    color: '#fff',
    marginVertical: 5,
    paddingHorizontal:10,
    borderBottomColor:'#ffffff90',
    borderBottomWidth:1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding:0
  },
  text_input_icon: {
    alignSelf: 'center',
    color: '#bdbdbd',
    marginHorizontal: 5,
  },
  navButton: {
    alignSelf: 'center',
  },
  navButtonText: {
    fontSize: 20,
    color: '#ea8331',
  },
  logo: {
    height: 130,
    width: 130,
    alignSelf:'center',
    marginVertical: 10,
  }
});

export {login_screen};