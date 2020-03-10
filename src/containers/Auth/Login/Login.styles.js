import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from './../../../utils/constants';
import {Colors} from './../../../theme';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 350,
    height: 350,
  },
  container: {
    backgroundColor: Colors.background,
    height: SCREEN_HEIGHT,
  },
  viewInput: {
    // alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 3,
    backgroundColor: '#fff',
    borderBottomWidth: 3,
    // borderColor: ,
    borderColor: 'transparent',
    marginTop: 0,
    marginLeft: -10,
    height: 60,
    width: SCREEN_WIDTH - 80,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.theme_color.light_orange,
  },
  outline: {
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    // borderBottomWidth: 3,
    // borderColor: ,
    height: 60,
    marginBottom: 20,
    width: SCREEN_WIDTH - 79.5,
  },
   modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal3: {
    marginTop : 30,
    height: 300,
    width: 300,
    backgroundColor : 'rgba(255,255,255,0)'
  },
});

export default styles;
