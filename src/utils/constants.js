import { Dimensions } from "react-native";
import { getStatusBarHeight } from './functions';



export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const STATUS_BAR_HEIGHT = getStatusBarHeight();