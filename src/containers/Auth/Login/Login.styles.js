import {StyleSheet} from 'react-native';
import { SCREEN_WIDTH } from './../../../utils/constants';

export const styles = StyleSheet.create({
  logo: {
    width: SCREEN_WIDTH - 60,
    height: 80,
    paddingTop: 20,
    paddingBottom: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
