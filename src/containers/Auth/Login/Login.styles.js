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
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 3,
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderColor: Colors.theme_color.orange,
    height: 60,
    width: SCREEN_WIDTH - 80,
    marginBottom: 20,
  }, 
   textInput: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.theme_color.light_orange,
  },
});

export default styles;
