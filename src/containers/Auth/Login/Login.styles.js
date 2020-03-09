import {StyleSheet} from 'react-native';
import { SCREEN_WIDTH,SCREEN_HEIGHT } from './../../../utils/constants';
import {Colors} from './../../../theme';

 const styles = StyleSheet.create({
  logo: {
    width: SCREEN_WIDTH - 60,
    height: 100,
    paddingTop: 150,
    paddingBottom: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  container : {
      backgroundColor: Colors.background,
      height: SCREEN_HEIGHT
  }
});


export default styles